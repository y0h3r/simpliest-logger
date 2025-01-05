import { LOG_LEVEL } from '../constants';
export declare class MessageFormatter {
    static format(level: LOG_LEVEL, message: string): string;
    static applyColor(level: LOG_LEVEL, message: string): string;
}
