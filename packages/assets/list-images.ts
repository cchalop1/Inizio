import { DevContainerImage } from "@inizio/types/devContainerImage";

const images: DevContainerImage[] = [
  {
    image: "mcr.microsoft.com/devcontainers/typescript-node",
    name: "node",
  },
  {
    image: "mcr.microsoft.com/devcontainers/go",
    name: "go",
  },
  {
    image: "mcr.microsoft.com/devcontainers/java",
    name: "java",
  },
  {
    image: "mcr.microsoft.com/devcontainers/rust",
    name: "rust",
  },
  {
    image: "mcr.microsoft.com/devcontainers/php",
    name: "php",
  },
  {
    image: "mcr.microsoft.com/devcontainers/python",
    name: "python",
  },
];

export default images;
