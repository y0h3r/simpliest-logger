import { SimpliestLogger } from '../simpliest-logger';
import { LOG_LEVEL } from '../constants';
import { ConsoleOutput } from '../console-output';
import { FileOutput } from '../file-output';

const logger = new SimpliestLogger({
  level: LOG_LEVEL.DEBUG,
  outputs: [new ConsoleOutput(), new FileOutput('./logs/app.log')],
});

logger.debug('Debug message', { param: 'value 1' });
logger.info('Info message', {
  param: 'value 1',
  nested: { paramnested: 'value 2' },
});
logger.warn('Warning message');
logger.error('Error message');
