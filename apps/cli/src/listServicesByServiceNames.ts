import { DevcontainerService } from '@inizio/types/types';
import listServices from '@inizio/assets/list-services';

export function listServicesByServiceNames(servicesToKeep: string[]): DevcontainerService[] {
  return listServices.filter((s) => servicesToKeep.includes(s.name));
}
