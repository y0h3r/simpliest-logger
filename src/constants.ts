export enum LOG_LEVEL {
  DEBUG = 'debug',
  INFO = 'info ',
  WARN = 'warn ',
  ERROR = 'error',
}

enum SUPPORTED_COLORS {
  'BLUE' = '\x1b[34m',
  'GREEN' = '\x1b[32m',
  'YELLOW' = '\x1b[33m',
  'RED' = '\x1b[31m',
}

export const logLevelColors: Record<LOG_LEVEL, string> = {
  [LOG_LEVEL.DEBUG]: SUPPORTED_COLORS.BLUE,
  [LOG_LEVEL.INFO]: SUPPORTED_COLORS.GREEN,
  [LOG_LEVEL.WARN]: SUPPORTED_COLORS.YELLOW,
  [LOG_LEVEL.ERROR]: SUPPORTED_COLORS.RED,
};
