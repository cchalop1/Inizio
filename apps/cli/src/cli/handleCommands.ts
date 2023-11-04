import arg from 'arg';
import { displayHelp, displayVersion } from './argv';
import { dockerFileRootExist } from '../file';
import { createDevContainerConfig } from '../createContainersConfig';

// TODO: add result type
export function handleCommands(argv: arg.Result<any>) {
  if (argv['--help']) {
    displayHelp();
    return;
  }

  if (argv['--version']) {
    displayVersion();
    return;
  }

  const alreadyDockerFile = dockerFileRootExist();

  if (!alreadyDockerFile && !argv['--devContainerImage']) {
    throw new Error("If you don't have a Dockerfile, you need to specify a devContainerImage");
  }

  createDevContainerConfig({
    listServices: argv['--service'] || [],
    devContainerImage: argv['--devContainerImage'] || undefined,
  });
}
