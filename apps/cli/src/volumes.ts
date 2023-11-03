import { DevcontainerService, Volume } from './types/types';

export function generateVolumesConfig(services: DevcontainerService[]): Volume[] {
  return services
    .filter((s) => s.volume !== undefined)
    .map((service) => {
      return {
        serviceName: service.name,
        name: `${service.name}-data`,
        path: service.volume as string,
      };
    });
}
