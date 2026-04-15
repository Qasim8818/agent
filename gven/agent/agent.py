"""
GVEN AI Agent - Improved Version
Main autonomous agent that monitors state and generates proofs
Includes robust error handling, resource limits, and metrics
"""

import time
import json
import logging
from typing import Dict, Any, Optional
from datetime import datetime
from collections import deque

from sensor import read_sensor, SensorSimulator
from state import (
    create_state, state_hash, validate_transition,
    create_transition_proof_input
)

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='[%(asctime)s] %(levelname)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

# Configuration constants
MAX_PROOF_QUEUE_SIZE = 10000  # Prevent unbounded queue growth
MAX_STATE_HISTORY_SIZE = 5000  # Prevent unbounded memory growth
MAX_CONSECUTIVE_ERRORS = 10  # Circuit breaker threshold
SENSOR_READ_TIMEOUT = 5  # Seconds
STATE_CREATION_TIMEOUT = 5  # Seconds


class AgentMetrics:
    """Track agent performance metrics"""
    
    def __init__(self):
        self.iterations: int = 0
        self.state_changes: int = 0
        self.errors: int = 0
        self.consecutive_errors: int = 0
        self.proofs_queued: int = 0
        self.proofs_rejected: int = 0
        self.total_processing_time: float = 0.0
    
    def record_iteration(self, processing_time: float):
        self.iterations += 1
        self.total_processing_time += processing_time
    
    def get_average_time(self) -> float:
        if self.iterations == 0:
            return 0.0
        return self.total_processing_time / self.iterations
    
    def reset_consecutive_errors(self):
        self.consecutive_errors = 0
    
    def increment_consecutive_errors(self):
        self.consecutive_errors += 1
        self.errors += 1


class GVENAgent:
    """Autonomous agent that monitors entity state and generates proofs"""
    
    def __init__(self, entity_id: str, state_change_threshold: float = 1.0):
        """Initialize GVEN Agent with resource limits
        
        Args:
            entity_id: Unique entity identifier (e.g., device UUID)
            state_change_threshold: Temperature change to trigger state update (°C)
        """
        if not entity_id or len(entity_id) > 256:
            raise ValueError("entity_id must be non-empty and <= 256 chars")
        
        self.entity_id = entity_id
        self.threshold = state_change_threshold
        self.last_state: Optional[Dict[str, Any]] = None
        
        # Use deque with maxlen for bounded history
        self.state_history: deque = deque(maxlen=MAX_STATE_HISTORY_SIZE)
        
        # Use deque with maxlen for bounded queue
        self.proof_queue: deque = deque(maxlen=MAX_PROOF_QUEUE_SIZE)
        
        self.logger = logging.getLogger(f"Agent:{entity_id}")
        self.metrics = AgentMetrics()
    
    def _is_state_changed(self, sensor_data: Dict[str, Any]) -> bool:
        """Detect if state changed significantly"""
        if self.last_state is None:
            return True
        
        try:
            # Check temperature change
            temp_change = abs(
                sensor_data.get("temperature", 0) - 
                self.last_state.get("temperature", 0)
            )
            if temp_change > self.threshold:
                return True
            
            # Check location change (rough check in degrees)
            lat_change = abs(
                sensor_data.get("latitude", 0) - 
                self.last_state.get("latitude", 0)
            )
            if lat_change > 0.001:  # ~100 meters
                return True
            
            return False
        except Exception as e:
            self.logger.warning(f"Error checking state change: {e}")
            return False
    
    def _create_new_state(self, sensor_data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Create and validate new state from sensor data with timeout"""
        try:
            # Validate sensor data
            if not isinstance(sensor_data, dict):
                self.logger.error("Invalid sensor data: not a dictionary")
                return None
            
            # Extract location safely
            location = f"lat:{sensor_data.get('latitude', 0):.4f},lon:{sensor_data.get('longitude', 0):.4f}"
            
            new_state = create_state(
                owner=self.entity_id,
                location=location,
                status="active",
                prev_state=self.last_state,
                metadata={
                    "temperature": sensor_data.get("temperature"),
                    "humidity": sensor_data.get("humidity"),
                    "battery_level": sensor_data.get("battery_level"),
                    "sensor_id": sensor_data.get("device_id"),
                }
            )
            return new_state
        
        except ValueError as e:
            self.logger.error(f"Validation error creating state: {e}")
            return None
        except Exception as e:
            self.logger.error(f"Failed to create state: {e}", exc_info=True)
            self.metrics.increment_consecutive_errors()
            return None
    
    def _queue_proof(self, old_state: Dict[str, Any], new_state: Dict[str, Any]) -> bool:
        """Queue a proof generation task with overflow protection
        
        Returns:
            True if queued successfully, False if queue is full
        """
        try:
            # Create proof input
            proof_input = create_transition_proof_input(old_state, new_state)
            
            # Check if queue would overflow (deque with maxlen will drop oldest)
            if len(self.proof_queue) >= MAX_PROOF_QUEUE_SIZE:
                self.logger.warning(f"Proof queue at capacity ({MAX_PROOF_QUEUE_SIZE}), oldest proof will be dropped")
                self.metrics.proofs_rejected += 1
                return False
            
            # Queue it (in production, would use Celery)
            proof_task = {
                "entity_id": self.entity_id,
                "old_state_hash": state_hash(old_state),
                "new_state_hash": state_hash(new_state),
                "timestamp": int(time.time()),
                "proof_input": proof_input,
                "status": "queued"
            }
            
            self.proof_queue.append(proof_task)
            self.metrics.proofs_queued += 1
            self.logger.debug(f"Queued proof (queue size: {len(self.proof_queue)}/{MAX_PROOF_QUEUE_SIZE})")
            
            return True
        
        except ValueError as e:
            self.logger.error(f"Invalid transition for proof: {e}")
            self.metrics.proofs_rejected += 1
            return False
        except Exception as e:
            self.logger.error(f"Failed to queue proof: {e}", exc_info=True)
            self.metrics.increment_consecutive_errors()
            return False
    
    def process_iteration(self) -> bool:
        """Process one agent iteration with comprehensive error handling
        
        Returns:
            True if state changed, False otherwise
        """
        iter_start = time.time()
        
        try:
            # Read sensor
            sensor_data = read_sensor()
            
            if not sensor_data:
                self.logger.warning("Sensor returned empty data")
                self.metrics.increment_consecutive_errors()
                return False
            
            # Check if changed
            if not self._is_state_changed(sensor_data):
                self.metrics.record_iteration(time.time() - iter_start)
                self.metrics.reset_consecutive_errors()
                return False
            
            self.logger.info("State change detected")
            
            # Create new state
            new_state = self._create_new_state(sensor_data)
            if not new_state:
                self.metrics.increment_consecutive_errors()
                self.metrics.record_iteration(time.time() - iter_start)
                return False
            
            # Validate transition
            if self.last_state:
                valid, error = validate_transition(self.last_state, new_state)
                if not valid:
                    self.logger.error(f"Invalid transition: {error}")
                    self.metrics.increment_consecutive_errors()
                    self.metrics.record_iteration(time.time() - iter_start)
                    return False
                self.logger.info("✓ Transition valid")
                
                # Queue proof (log if failed but continue)
                if not self._queue_proof(self.last_state, new_state):
                    self.logger.warning("Failed to queue proof, skipping")
            else:
                self.logger.info("✓ Initial state created")
            
            # Update state
            self.last_state = new_state
            self.state_history.append(new_state)
            
            # Reset error counter on success
            self.metrics.reset_consecutive_errors()
            self.metrics.state_changes += 1
            
            self.logger.info(f"State hash: {state_hash(new_state)[:16]}...")
            self.logger.info(f"History length: {len(self.state_history)}/{MAX_STATE_HISTORY_SIZE}")
            
            self.metrics.record_iteration(time.time() - iter_start)
            return True
            
        except Exception as e:
            self.logger.error(f"Iteration failed: {e}", exc_info=True)
            self.metrics.increment_consecutive_errors()
            self.metrics.record_iteration(time.time() - iter_start)
            return False
    
    def should_circuit_break(self) -> bool:
        """Check if circuit breaker should be engaged"""
        if self.metrics.consecutive_errors >= MAX_CONSECUTIVE_ERRORS:
            self.logger.critical(f"Circuit breaker engaged: {self.metrics.consecutive_errors} consecutive errors")
            return True
        return False
    
    def run(self, duration: Optional[int] = None, check_interval: int = 2) -> None:
        """Run agent main loop with graceful error handling
        
        Args:
            duration: Total duration in seconds (None = infinite)
            check_interval: Seconds between state checks
        """
        self.logger.info(f"Starting GVEN Agent for entity: {self.entity_id}")
        self.logger.info(f"Check interval: {check_interval}s")
        self.logger.info(f"Resource limits: history={MAX_STATE_HISTORY_SIZE}, queue={MAX_PROOF_QUEUE_SIZE}")
        
        start_time = time.time()
        
        try:
            while True:
                # Process iteration
                changed = self.process_iteration()
                
                # Check circuit breaker
                if self.should_circuit_break():
                    self.logger.critical("Shutting down due to circuit breaker")
                    break
                
                # Log summary every 10 iterations
                if self.metrics.iterations % 10 == 0 and self.metrics.iterations > 0:
                    elapsed = time.time() - start_time
                    avg_time = self.metrics.get_average_time()
                    self.logger.info(
                        f"[{elapsed:6.1f}s] "
                        f"Iter: {self.metrics.iterations}, "
                        f"Changes: {self.metrics.state_changes}, "
                        f"Errors: {self.metrics.errors}, "
                        f"Queue: {len(self.proof_queue)}/{MAX_PROOF_QUEUE_SIZE}, "
                        f"Avg time: {avg_time*1000:.1f}ms"
                    )
                
                # Check duration
                elapsed = time.time() - start_time
                if duration and elapsed >= duration:
                    break
                
                time.sleep(check_interval)
        
        except KeyboardInterrupt:
            self.logger.info("Agent interrupted by user")
        except Exception as e:
            self.logger.critical(f"Unexpected error in main loop: {e}", exc_info=True)
        
        # Summary
        elapsed = time.time() - start_time
        self.logger.info("=" * 70)
        self.logger.info("Agent Run Summary")
        self.logger.info("=" * 70)
        self.logger.info(f"Duration: {elapsed:.1f}s")
        self.logger.info(f"Iterations: {self.metrics.iterations}")
        self.logger.info(f"State changes: {self.metrics.state_changes}")
        self.logger.info(f"Total errors: {self.metrics.errors}")
        self.logger.info(f"Average iteration time: {self.metrics.get_average_time()*1000:.2f}ms")
        self.logger.info(f"Proofs queued: {self.metrics.proofs_queued}")
        self.logger.info(f"Proofs rejected: {self.metrics.proofs_rejected}")
        self.logger.info(f"Final queue size: {len(self.proof_queue)}/{MAX_PROOF_QUEUE_SIZE}")
        self.logger.info(f"State history size: {len(self.state_history)}/{MAX_STATE_HISTORY_SIZE}")
        self.logger.info("=" * 70)


def main():
    """Main entry point with error handling"""
    import sys
    
    try:
        # Parse arguments
        entity_id = sys.argv[1] if len(sys.argv) > 1 else "device-001"
        duration = int(sys.argv[2]) if len(sys.argv) > 2 else None
        
        # Start sensor simulator
        logger.info("Starting sensor simulator...")
        sensor_sim = SensorSimulator()
        sensor_sim.start_background(update_interval=3, duration=duration)
        
        # Give sensor time to write first data
        time.sleep(2)
        
        # Start agent
        logger.info("Starting GVEN Agent...")
        agent = GVENAgent(entity_id=entity_id, state_change_threshold=1.0)
        agent.run(duration=duration, check_interval=2)
        
        # Cleanup
        sensor_sim.stop()
        sensor_sim.wait()
        
    except Exception as e:
        logger.critical(f"Main execution failed: {e}", exc_info=True)
        sys.exit(1)


if __name__ == "__main__":
    main()
