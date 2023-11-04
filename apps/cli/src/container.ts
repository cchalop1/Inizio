import { CreateDevContainerConfigDto } from './types/devContainerConfig';
import { listServicesByServiceNames } from './listServicesByServiceNames';
import { DevcontainerService, Service, DockerComposeConfig, Volume } from './types/types';
import { generateVolumesConfig } from './volumes';
import { findDevContainerImage } from './images';

function devcontainerServiceToService(service: DevcontainerService, volumesService: Volume[]): Service {
  return {
    image: service.image,
    restart: 'unless-stopped',
    volumes: volumesService.map((v) => `${v.name}:${v.path}`),
    env_file: ['.env'],
  };
}

// TODO: return array of services
function buildServicesObject(services: DevcontainerService[], volumes: Volume[]): any {
  const servicesObject: any = {};
  services.forEach((service) => {
    const volumesService = volumes.filter((v) => v.serviceName === service.name);
    servicesObject[service.name] = devcontainerServiceToService(service, volumesService);
  });
  return servicesObject;
}

export function generateDockerComposeConfig(config: CreateDevContainerConfigDto): DockerComposeConfig {
  const services = listServicesByServiceNames(config.listServices);
  const volumes = generateVolumesConfig(services);
  let devContainerImage;

  if (config.devContainerImage) {
    devContainerImage = findDevContainerImage(config.devContainerImage);
  }

  // TODO: check is Dockerfile is present
  return {
    version: '3.8',
    services: {
      ['devcontainer']: {
        command: 'sleep infinity',
        build: config.devContainerImage ? undefined : { context: '..', dockerfile: 'Dockerfile' },
        image: config.devContainerImage ? devContainerImage?.image : undefined,
        volumes: ['../..:/workspaces:cached'],
        env_file: ['.env'],
      },
      ...buildServicesObject(services, volumes),
    },
    volumes: volumes.reduce((acc: any, curr) => ((acc[curr.name] = {}), acc), {}),
  };
}
