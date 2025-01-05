"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOutput = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FileOutput {
    constructor(filePath) {
        this.filePath = filePath;
        this.ensureFileExists();
        this.fileStream = fs_1.default.createWriteStream(this.filePath, { flags: 'a' });
    }
    ensureFileExists() {
        const dirPath = path_1.default.dirname(this.filePath);
        if (!fs_1.default.existsSync(dirPath)) {
            fs_1.default.mkdirSync(dirPath, { recursive: true });
        }
        if (!fs_1.default.existsSync(this.filePath)) {
            fs_1.default.writeFileSync(this.filePath, '');
        }
    }
    write(level, message, metadata) {
        const metadataString = metadata
            ? ` | Metadata: ${JSON.stringify(metadata)}`
            : '';
        this.fileStream.write(`[${level.toUpperCase()}] ${message}${metadataString}\n`);
    }
}
exports.FileOutput = FileOutput;
