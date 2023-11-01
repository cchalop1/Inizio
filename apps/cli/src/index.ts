import { displayHelp, parseArgs } from './cli/argv';
import { handleCommands } from './cli/handleCommands';

function main() {
  if (process.argv.length <= 2) {
    displayHelp();
    return;
  }
  const argv = parseArgs(process.argv);
  handleCommands(argv);
}

main();
