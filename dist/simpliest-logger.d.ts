import { LOG_LEVEL } from './constants';
export interface LogOutput {
    write(level: string, message: string, metadata?: Record<string, any>): void;
}
export interface LoggerConfig {
    level?: LOG_LEVEL;
    outputs: LogOutput[];
}
export declare class SimpliestLogger {
    private config;
    private level;
    constructor(config: LoggerConfig);
    private shouldLog;
    log(level: LOG_LEVEL, message: string, metadata?: Record<string, any>): void;
    debug(message: string, metadata?: Record<string, any>): void;
    info(message: string, metadata?: Record<string, any>): void;
    warn(message: string, metadata?: Record<string, any>): void;
    error(message: string, metadata?: Record<string, any>): void;
}
