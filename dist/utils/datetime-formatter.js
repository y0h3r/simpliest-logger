"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampUtil = void 0;
class TimestampUtil {
    static getFormattedTimestamp() {
        return new Date().toISOString();
    }
}
exports.TimestampUtil = TimestampUtil;
