"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOutput = void 0;
const constants_1 = require("./constants");
class ConsoleOutput {
    write(level, message, metadata) {
        const metadataString = metadata
            ? ` | Metadata: ${JSON.stringify(metadata)}`
            : '';
        const color = constants_1.logLevelColors[level] || '';
        const reset = '\x1b[0m';
        console.log(`${color}${message}${metadataString}${reset}`);
    }
}
exports.ConsoleOutput = ConsoleOutput;
