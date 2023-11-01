import { generateDockerComposeConfig } from './container';
import { createDevContainerConfigFiles, createEnvFile } from './file';
import { CreateDevContainerConfigDto } from '@inizio/types/devContainerConfig';

export function createDevContainerConfig(config: CreateDevContainerConfigDto) {
  const dockerComposeConfig = generateDockerComposeConfig(config);
  createDevContainerConfigFiles(dockerComposeConfig);
  createEnvFile(config.listServices);
}
