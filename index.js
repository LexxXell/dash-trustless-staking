import { program } from 'commander';
import CreatePool from './commands/createPool.command.js';

program
  .version('1.0.0')
  .description('Commander App');

program.addCommand(new CreatePool('createPool'));

program.parse(process.argv);
