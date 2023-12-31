import { DevContainerImage } from './types/devContainerImage';
import { images } from './assets/list-images';

export function findDevContainerImage(name: string): DevContainerImage {
  const image = images.find((devContainer) => devContainer.name === name);
  if (!image) {
    throw new Error(`DevContainerImage ${name} not found`);
  }
  return image;
}
