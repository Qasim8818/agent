"""
Sensor simulation for GVEN - Improved Version
Generates realistic sensor data with robust error handling and thread safety
"""

import json
import time
import random
import threading
from datetime import datetime
from typing import Dict, Any, Optional, Callable
import logging

logger = logging.getLogger(__name__)

# Configuration constants
MAX_FILE_RETRIES = 3
FILE_RETRY_DELAY = 0.1  # Seconds
SENSOR_DATA_TIMEOUT = 10  # Seconds
MAX_CALLBACKS = 100


class SensorSimulator:
    """Simulates various sensors with robust error handling and thread safety"""
    
    def __init__(self, output_file: str = "sensor_data.json"):
        self.output_file = output_file
        self.running = False
        self.thread: Optional[threading.Thread] = None
        self.last_data: Dict[str, Any] = {}
        self.callbacks: list[Callable] = []
        self.lock = threading.RLock()  # Reentrant lock for thread safety
        self.last_data_lock = threading.RLock()
        self.is_initialized = False
        
        # Initialize sensor once
        self._initialize_sensor()
    
    def _initialize_sensor(self) -> bool:
        """Initialize sensor data file if it doesn't exist"""
        try:
            with self.lock:
                if self.is_initialized:
                    return True
                
                # Try to read existing file
                try:
                    with open(self.output_file, 'r') as f:
                        data = json.load(f)
                        self.is_initialized = True
                        return True
                except (FileNotFoundError, json.JSONDecodeError):
                    # Create initial data
                    initial_data = {
                        "timestamp": int(time.time()),
                        "temperature": 20.0,
                        "humidity": 50.0,
                        "latitude": 40.7128,
                        "longitude": -74.0060,
                        "device_id": "sensor-001",
                        "battery_level": 100.0,
                        "signal_strength": -30,
                    }
                    self.write_sensor(initial_data)
                    self.is_initialized = True
                    return True
        except Exception as e:
            logger.error(f"Failed to initialize sensor: {e}")
            return False
    
    def add_callback(self, callback: Callable[[Dict[str, Any]], None]):
        """Add callback with limit check"""
        with self.lock:
            if len(self.callbacks) >= MAX_CALLBACKS:
                logger.warning(f"Callback limit reached ({MAX_CALLBACKS})")
                return
            self.callbacks.append(callback)
    
    def _generate_sensor_data(self) -> Dict[str, Any]:
        """Generate realistic sensor readings with bounds checking"""
        try:
            # Gaussian distribution with bounds
            temperature = max(-40, min(85, 20 + random.gauss(0, 2)))  # -40°C to 85°C
            humidity = max(0, min(100, 50 + random.gauss(0, 5)))      # 0% to 100%
            
            # Initialize location base if needed
            if not hasattr(self, '_location_base'):
                self._location_base = {
                    'latitude': 40.7128 + random.uniform(-0.01, 0.01),
                    'longitude': -74.0060 + random.uniform(-0.01, 0.01),
                }
            
            # Random small movement
            latitude = self._location_base['latitude'] + random.uniform(-0.0001, 0.0001)
            longitude = self._location_base['longitude'] + random.uniform(-0.0001, 0.0001)
            
            # Battery level (degrades over time but cycles for demo)
            if not hasattr(self, '_battery_start'):
                self._battery_start = time.time()
            battery_elapsed = (time.time() - self._battery_start) % 3600
            battery_level = max(10, 85 - (battery_elapsed / 3600 * 70))  # Min 10%
            
            return {
                "timestamp": int(time.time()),
                "temperature": round(temperature, 2),
                "humidity": round(humidity, 2),
                "latitude": round(latitude, 6),
                "longitude": round(longitude, 6),
                "device_id": "sensor-001",
                "battery_level": round(battery_level, 1),
                "signal_strength": random.randint(-100, -20),  # dBm range
            }
        except Exception as e:
            logger.error(f"Error generating sensor data: {e}")
            # Return safe defaults
            return {
                "timestamp": int(time.time()),
                "temperature": 20.0,
                "humidity": 50.0,
                "latitude": 40.7128,
                "longitude": -74.0060,
                "device_id": "sensor-001",
                "battery_level": 50.0,
                "signal_strength": -50,
            }
    
    def read_sensor(self) -> Dict[str, Any]:
        """Read latest sensor data from file with retries"""
        for attempt in range(MAX_FILE_RETRIES):
            try:
                with open(self.output_file, 'r') as f:
                    data = json.load(f)
                    with self.last_data_lock:
                        self.last_data = data
                    return data
            except (FileNotFoundError, json.JSONDecodeError) as e:
                if attempt < MAX_FILE_RETRIES - 1:
                    logger.debug(f"Read attempt {attempt + 1} failed, retrying...")
                    time.sleep(FILE_RETRY_DELAY)
                else:
                    logger.warning(f"Failed to read sensor data after {MAX_FILE_RETRIES} attempts: {e}")
            except Exception as e:
                logger.error(f"Unexpected error reading sensor: {e}")
                break
        
        # Return last known data or defaults
        with self.last_data_lock:
            if self.last_data:
                return self.last_data
        
        return {
            "timestamp": int(time.time()),
            "temperature": 20.0,
            "humidity": 50.0,
            "latitude": 40.7128,
            "longitude": -74.0060,
            "device_id": "sensor-001",
            "battery_level": 100.0,
            "signal_strength": -30,
        }
    
    def write_sensor(self, data: Dict[str, Any]) -> bool:
        """Write sensor data to file with atomic write"""
        if not isinstance(data, dict):
            logger.error("Sensor data must be a dictionary")
            return False
        
        try:
            # Write to temp file first, then rename (atomic operation)
            temp_file = f"{self.output_file}.tmp"
            with open(temp_file, 'w') as f:
                json.dump(data, f, indent=2)
            
            # Use os.replace for atomic operation on most systems
            import os
            os.replace(temp_file, self.output_file)
            
            with self.last_data_lock:
                self.last_data = data
            
            # Call callbacks safely
            self._call_callbacks(data)
            return True
        
        except Exception as e:
            logger.error(f"Failed to write sensor data: {e}")
            return False
    
    def _call_callbacks(self, data: Dict[str, Any]) -> None:
        """Call registered callbacks with error isolation"""
        with self.lock:
            for i, callback in enumerate(self.callbacks):
                try:
                    callback(data)
                except Exception as e:
                    logger.error(f"Callback {i} error: {e}")
    
    def simulate(self, update_interval: int = 5, duration: Optional[int] = None) -> None:
        """Run sensor simulator loop with graceful error handling
        
        Args:
            update_interval: Seconds between updates
            duration: Total duration in seconds (None = infinite)
        """
        if update_interval < 1:
            logger.error("Update interval must be >= 1 second")
            return
        
        self.running = True
        start_time = time.time()
        iteration = 0
        write_errors = 0
        
        logger.info(f"Sensor simulator started (interval: {update_interval}s, duration: {duration or 'infinite'}s)")
        
        try:
            while self.running:
                iteration += 1
                iteration_start = time.time()
                
                try:
                    # Generate and write data
                    data = self._generate_sensor_data()
                    if not self.write_sensor(data):
                        write_errors += 1
                        if write_errors > 10:
                            logger.error("Too many write errors, stopping simulator")
                            break
                    else:
                        write_errors = 0  # Reset on success
                    
                    # Log update
                    elapsed = time.time() - start_time
                    temp = data.get('temperature', 0)
                    humid = data.get('humidity', 0)
                    logger.debug(f"[{elapsed:7.1f}s] Sensor update #{iteration}: "
                               f"temp={temp:.1f}°C, humidity={humid:.1f}%, "
                               f"battery={data.get('battery_level'):.0f}%")
                    
                    # Check duration
                    if duration and elapsed >= duration:
                        logger.info(f"Simulation duration reached ({duration}s)")
                        break
                    
                    # Sleep for interval, accounting for processing time
                    processing_time = time.time() - iteration_start
                    sleep_time = max(0, update_interval - processing_time)
                    time.sleep(sleep_time)
                
                except Exception as e:
                    logger.error(f"Error in simulation loop: {e}", exc_info=True)
                    time.sleep(update_interval)  # Don't spin tight on errors
        
        except Exception as e:
            logger.error(f"Unexpected error in simulate: {e}", exc_info=True)
        finally:
            self.running = False
            logger.info(f"Sensor simulator stopped (iterations: {iteration}, write errors: {write_errors})")
    
    def start_background(self, update_interval: int = 5, duration: Optional[int] = None) -> None:
        """Start simulator in background thread"""
        with self.lock:
            if self.thread and self.thread.is_alive():
                logger.warning("Simulator already running")
                return
            
            self.thread = threading.Thread(
                target=self.simulate,
                args=(update_interval, duration),
                daemon=True,
                name="SensorSimulator"
            )
            self.thread.start()
    
    def stop(self) -> None:
        """Stop simulator gracefully"""
        with self.lock:
            self.running = False
            if self.thread and self.thread.is_alive():
                self.thread.join(timeout=5)
                if self.thread.is_alive():
                    logger.warning("Sensor thread did not stop within timeout")
    
    def wait(self) -> None:
        """Wait for simulator thread to finish"""
        if self.thread:
            self.thread.join(timeout=10)


# Global sensor instance
_sensor: Optional[SensorSimulator] = None
_sensor_lock = threading.Lock()


def _get_sensor() -> SensorSimulator:
    """Get or create global sensor instance"""
    global _sensor
    if _sensor is None:
        with _sensor_lock:
            if _sensor is None:
                _sensor = SensorSimulator()
    return _sensor


def read_sensor() -> Dict[str, Any]:
    """Read latest sensor data"""
    return _get_sensor().read_sensor()


def start_sensor(update_interval: int = 5, duration: Optional[int] = None) -> None:
    """Start sensor simulator in background"""
    _get_sensor().start_background(update_interval, duration)


def stop_sensor() -> None:
    """Stop sensor simulator"""
    _get_sensor().stop()


def add_sensor_callback(callback: Callable[[Dict[str, Any]], None]) -> None:
    """Add callback when sensor data changes"""
    _get_sensor().add_callback(callback)


if __name__ == "__main__":
    # Example: Run sensor simulator for 30 seconds
    logger.info("Starting sensor simulator...")
    sim = SensorSimulator(output_file="test_sensor_data.json")
    sim.simulate(update_interval=3, duration=30)
    logger.info("Done")


if __name__ == "__main__":
    # Example: Run sensor simulator for 30 seconds
    print("[*] Starting sensor simulator...")
    sim = SensorSimulator(output_file="test_sensor_data.json")
    sim.simulate(update_interval=3, duration=30)
    print("[*] Done")
