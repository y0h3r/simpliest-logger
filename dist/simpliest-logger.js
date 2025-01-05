"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpliestLogger = void 0;
const constants_1 = require("./constants");
const message_formatter_1 = require("./utils/message-formatter");
class SimpliestLogger {
    constructor(config) {
        this.config = config;
        this.level = config.level || constants_1.LOG_LEVEL.INFO;
    }
    shouldLog(level) {
        const levels = Object.values(constants_1.LOG_LEVEL);
        return levels.indexOf(level) >= levels.indexOf(this.level);
    }
    log(level, message, metadata) {
        if (!this.shouldLog(level))
            return;
        const formattedMessage = message_formatter_1.MessageFormatter.format(level, message);
        this.config.outputs.forEach((output) => {
            output.write(level, formattedMessage, metadata);
        });
    }
    debug(message, metadata) {
        this.log(constants_1.LOG_LEVEL.DEBUG, message, metadata);
    }
    info(message, metadata) {
        this.log(constants_1.LOG_LEVEL.INFO, message, metadata);
    }
    warn(message, metadata) {
        this.log(constants_1.LOG_LEVEL.WARN, message, metadata);
    }
    error(message, metadata) {
        this.log(constants_1.LOG_LEVEL.ERROR, message, metadata);
    }
}
exports.SimpliestLogger = SimpliestLogger;
