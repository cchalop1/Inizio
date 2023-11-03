import { DevcontainerService } from '@inizio/types/types';
import { services } from './assets/list-services';

export function listServicesByServiceNames(servicesToKeep: string[]): DevcontainerService[] {
  return services.filter((s) => servicesToKeep.includes(s.name));
}
