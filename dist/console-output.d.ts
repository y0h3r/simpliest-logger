import { LogOutput } from './simpliest-logger';
import { LOG_LEVEL } from './constants';
export declare class ConsoleOutput implements LogOutput {
    write(level: LOG_LEVEL, message: string, metadata?: Record<string, any>): void;
}
