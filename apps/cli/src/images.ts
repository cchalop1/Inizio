import { DevContainerImage } from '@inizio/types/devContainerImage';
import { images } from '@inizio/assets/src/list-images';

export function findDevContainerImage(name: string): DevContainerImage {
  const image = images.find((devContainer) => devContainer.name === name);
  if (!image) {
    throw new Error(`DevContainerImage ${name} not found`);
  }
  return image;
}
