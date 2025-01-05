import fs from 'fs';
import path from 'path';
import { LogOutput } from './simpliest-logger';

export class FileOutput implements LogOutput {
  private fileStream: fs.WriteStream;

  constructor(private filePath: string) {
    this.ensureFileExists();
    this.fileStream = fs.createWriteStream(this.filePath, { flags: 'a' });
  }

  private ensureFileExists(): void {
    const dirPath = path.dirname(this.filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '');
    }
  }

  write(level: string, message: string, metadata?: Record<string, any>): void {
    const metadataString = metadata
      ? ` | Metadata: ${JSON.stringify(metadata)}`
      : '';
    this.fileStream.write(
      `[${level.toUpperCase()}] ${message}${metadataString}\n`
    );
  }
}
