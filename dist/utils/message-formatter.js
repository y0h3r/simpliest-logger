"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFormatter = void 0;
const constants_1 = require("../constants");
class MessageFormatter {
    static format(level, message) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    }
    static applyColor(level, message) {
        const color = constants_1.logLevelColors[level];
        const reset = '\x1b[0m';
        return `${color}${message}${reset}`;
    }
}
exports.MessageFormatter = MessageFormatter;
