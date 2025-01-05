import fs from 'fs';
import path from 'path';

var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL["DEBUG"] = "debug";
    LOG_LEVEL["INFO"] = "info ";
    LOG_LEVEL["WARN"] = "warn ";
    LOG_LEVEL["ERROR"] = "error";
})(LOG_LEVEL || (LOG_LEVEL = {}));
var SUPPORTED_COLORS;
(function (SUPPORTED_COLORS) {
    SUPPORTED_COLORS["BLUE"] = "\u001B[34m";
    SUPPORTED_COLORS["GREEN"] = "\u001B[32m";
    SUPPORTED_COLORS["YELLOW"] = "\u001B[33m";
    SUPPORTED_COLORS["RED"] = "\u001B[31m";
})(SUPPORTED_COLORS || (SUPPORTED_COLORS = {}));
const logLevelColors = {
    [LOG_LEVEL.DEBUG]: SUPPORTED_COLORS.BLUE,
    [LOG_LEVEL.INFO]: SUPPORTED_COLORS.GREEN,
    [LOG_LEVEL.WARN]: SUPPORTED_COLORS.YELLOW,
    [LOG_LEVEL.ERROR]: SUPPORTED_COLORS.RED,
};

class MessageFormatter {
    static format(level, message) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    }
    static applyColor(level, message) {
        const color = logLevelColors[level];
        const reset = '\x1b[0m';
        return `${color}${message}${reset}`;
    }
}

class SimpliestLogger {
    constructor(config) {
        this.config = config;
        this.level = config.level || LOG_LEVEL.INFO;
    }
    shouldLog(level) {
        const levels = Object.values(LOG_LEVEL);
        return levels.indexOf(level) >= levels.indexOf(this.level);
    }
    log(level, message, metadata) {
        if (!this.shouldLog(level))
            return;
        const formattedMessage = MessageFormatter.format(level, message);
        this.config.outputs.forEach((output) => {
            output.write(level, formattedMessage, metadata);
        });
    }
    debug(message, metadata) {
        this.log(LOG_LEVEL.DEBUG, message, metadata);
    }
    info(message, metadata) {
        this.log(LOG_LEVEL.INFO, message, metadata);
    }
    warn(message, metadata) {
        this.log(LOG_LEVEL.WARN, message, metadata);
    }
    error(message, metadata) {
        this.log(LOG_LEVEL.ERROR, message, metadata);
    }
}

class ConsoleOutput {
    write(level, message, metadata) {
        const metadataString = metadata
            ? ` | Metadata: ${JSON.stringify(metadata)}`
            : '';
        const color = logLevelColors[level] || '';
        const reset = '\x1b[0m';
        console.log(`${color}${message}${metadataString}${reset}`);
    }
}

class FileOutput {
    constructor(filePath) {
        this.filePath = filePath;
        this.ensureFileExists();
        this.fileStream = fs.createWriteStream(this.filePath, { flags: 'a' });
    }
    ensureFileExists() {
        const dirPath = path.dirname(this.filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, '');
        }
    }
    write(level, message, metadata) {
        const metadataString = metadata
            ? ` | Metadata: ${JSON.stringify(metadata)}`
            : '';
        this.fileStream.write(`[${level.toUpperCase()}] ${message}${metadataString}\n`);
    }
}

export { ConsoleOutput, FileOutput, LOG_LEVEL, SimpliestLogger };
//# sourceMappingURL=simpliest-logger.esm.js.map
