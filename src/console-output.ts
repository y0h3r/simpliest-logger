import { LogOutput } from './simpliest-logger';
import { LOG_LEVEL, logLevelColors } from './constants';

export class ConsoleOutput implements LogOutput {
  write(
    level: LOG_LEVEL,
    message: string,
    metadata?: Record<string, any>
  ): void {
    const metadataString = metadata
      ? ` | Metadata: ${JSON.stringify(metadata)}`
      : '';
    const color = logLevelColors[level] || '';
    const reset = '\x1b[0m';
    console.log(`${color}${message}${metadataString}${reset}`);
  }
}
