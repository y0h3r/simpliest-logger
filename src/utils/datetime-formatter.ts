export class TimestampUtil {
  static getFormattedTimestamp(): string {
    return new Date().toISOString();
  }
}
