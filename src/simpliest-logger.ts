import { LOG_LEVEL } from './constants.js';
import { MessageFormatter } from './utils/message-formatter';

export interface LogOutput {
  write(level: string, message: string, metadata?: Record<string, any>): void;
}

export interface LoggerConfig {
  level?: LOG_LEVEL;
  outputs: LogOutput[];
}

export class SimpliestLogger {
  private level: LOG_LEVEL;

  constructor(private config: LoggerConfig) {
    this.level = config.level || LOG_LEVEL.INFO;
  }

  private shouldLog(level: LOG_LEVEL): boolean {
    const levels = Object.values(LOG_LEVEL);
    return levels.indexOf(level) >= levels.indexOf(this.level);
  }

  log(level: LOG_LEVEL, message: string, metadata?: Record<string, any>): void {
    if (!this.shouldLog(level)) return;

    const formattedMessage = MessageFormatter.format(level, message);
    this.config.outputs.forEach((output) => {
      output.write(level, formattedMessage, metadata);
    });
  }

  debug(message: string, metadata?: Record<string, any>): void {
    this.log(LOG_LEVEL.DEBUG, message, metadata);
  }

  info(message: string, metadata?: Record<string, any>): void {
    this.log(LOG_LEVEL.INFO, message, metadata);
  }

  warn(message: string, metadata?: Record<string, any>): void {
    this.log(LOG_LEVEL.WARN, message, metadata);
  }

  error(message: string, metadata?: Record<string, any>): void {
    this.log(LOG_LEVEL.ERROR, message, metadata);
  }
}
