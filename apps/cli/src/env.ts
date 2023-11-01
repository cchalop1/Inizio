import { DevcontainerService, EnvVar } from '@inizio/types/types';
import { randomString } from './utils';

export function createEnvsForService(service: DevcontainerService): EnvVar[] {
  return service.env.map((env) => {
    return {
      name: env,
      secret: randomString(10),
    };
  });
}
