import { mkdirSync, writeFileSync, rmSync } from 'fs';
import yaml from 'yaml';

import { DockerComposeConfig, EnvVar } from '@inizio/types/types';
import { listServicesByServiceNames } from './listServicesByServiceNames';
import { createEnvsForService } from './env';

const devcontainerFileContent = `{
    "dockerComposeFile": "docker-compose.yml",
    "service": "devcontainer",
    "workspaceFolder": "/workspaces/\${localWorkspaceFolderBasename}"
}
`;

function removeFolderDevcontainer() {
  try {
    rmSync('.devcontainer', { recursive: true });
  } catch (error) {}
}

function createFolderDevcontainer() {
  try {
    mkdirSync('.devcontainer');
  } catch (error) {
    console.log(error);
  }
}

function createFileDevcontainer() {
  try {
    writeFileSync('.devcontainer/devcontainer.json', devcontainerFileContent);
  } catch (error) {
    console.log(error);
  }
}

function createDockerComposeFile(dockerComposeConfig: DockerComposeConfig) {
  try {
    const fileContent = yaml.stringify(dockerComposeConfig);
    writeFileSync('.devcontainer/docker-compose.yml', fileContent);
  } catch (error) {
    console.log(error);
  }
}

export function createEnvFile(services: string[]) {
  const servicesFiltered = listServicesByServiceNames(services);
  const envs = servicesFiltered.map(createEnvsForService).flat();
  try {
    const fileContent = envs.map((env: EnvVar) => `${env.name}=${env.secret}`).join('\n');
    writeFileSync('.devcontainer/.env', fileContent);
  } catch (error) {
    console.log(error);
  }
}

export function createDevContainerConfigFiles(dockerComposeConfig: DockerComposeConfig) {
  removeFolderDevcontainer();
  createFolderDevcontainer();
  createFileDevcontainer();
  createDockerComposeFile(dockerComposeConfig);
}

// TODO: implement
export function dockerFileRootExist() {
  return true;
}
