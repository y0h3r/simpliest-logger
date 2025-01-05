import { LOG_LEVEL, logLevelColors } from '../constants';

export class MessageFormatter {
  static format(level: LOG_LEVEL, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  }

  static applyColor(level: LOG_LEVEL, message: string): string {
    const color = logLevelColors[level];
    const reset = '\x1b[0m';
    return `${color}${message}${reset}`;
  }
}
