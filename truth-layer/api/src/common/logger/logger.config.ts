/**
 * ==================== WINSTON LOGGER CONFIGURATION ====================
 * Centralized logging for Truth Layer API
 * Outputs to: console + daily rotation file + structured JSON
 */

import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as path from 'path';

const logsDir = path.join(process.cwd(), 'logs');

// Winston logger instance
export const logger: winston.Logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  defaultMeta: {
    service: 'truth-layer-api',
    environment: process.env.NODE_ENV || 'development',
  },
  transports: [
    // Console output (colored)
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp, ...meta }) => {
          const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
          return `${timestamp} [${level}]: ${message} ${metaStr}`;
        }),
      ),
    }),

    // Daily rotation for errors
    new DailyRotateFile({
      filename: path.join(logsDir, 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d',
      level: 'error',
      format: winston.format.json(),
    }),

    // Daily rotation for all logs
    new DailyRotateFile({
      filename: path.join(logsDir, 'app-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '7d',
      format: winston.format.json(),
    }),
  ],
});

// Child loggers for specific modules
export const createLogger = (context: string): winston.Logger => {
  return logger.child({ context });
};

// Export logger for use in non-NestJS contexts
export default logger;
