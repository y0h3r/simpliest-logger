import { LogOutput } from './simpliest-logger';
export declare class FileOutput implements LogOutput {
    private filePath;
    private fileStream;
    constructor(filePath: string);
    private ensureFileExists;
    write(level: string, message: string, metadata?: Record<string, any>): void;
}
