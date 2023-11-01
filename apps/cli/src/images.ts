import { DevContainerImage } from '@inizio/types/devContainerImage';
import listImages from '@inizio/assets/list-images';

export function findDevContainerImage(name: string): DevContainerImage {
  const image = listImages.find((devContainer) => devContainer.name === name);
  if (!image) {
    throw new Error(`DevContainerImage ${name} not found`);
  }
  return image;
}
