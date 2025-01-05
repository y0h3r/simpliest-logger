"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logLevelColors = exports.LOG_LEVEL = void 0;
var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL["DEBUG"] = "debug";
    LOG_LEVEL["INFO"] = "info ";
    LOG_LEVEL["WARN"] = "warn ";
    LOG_LEVEL["ERROR"] = "error";
})(LOG_LEVEL || (exports.LOG_LEVEL = LOG_LEVEL = {}));
var SUPPORTED_COLORS;
(function (SUPPORTED_COLORS) {
    SUPPORTED_COLORS["BLUE"] = "\u001B[34m";
    SUPPORTED_COLORS["GREEN"] = "\u001B[32m";
    SUPPORTED_COLORS["YELLOW"] = "\u001B[33m";
    SUPPORTED_COLORS["RED"] = "\u001B[31m";
})(SUPPORTED_COLORS || (SUPPORTED_COLORS = {}));
exports.logLevelColors = {
    [LOG_LEVEL.DEBUG]: SUPPORTED_COLORS.BLUE,
    [LOG_LEVEL.INFO]: SUPPORTED_COLORS.GREEN,
    [LOG_LEVEL.WARN]: SUPPORTED_COLORS.YELLOW,
    [LOG_LEVEL.ERROR]: SUPPORTED_COLORS.RED,
};
