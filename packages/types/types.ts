export type EnvVar = {
  name: string;
  secret: string;
};

export type Volume = {
  serviceName: string;
  name: string;
  path: string;
};

export type DevcontainerService = {
  name: string;
  image: string;
  volume?: string;
  port: string;
  env: string[];
  icon: string;
};

export type Service = {
  image?: string;
  restart?: string;
  volumes?: string[];
  ports?: string[];
  env_file?: string[];
  build?: { context: string; dockerfile: string };
};

export type DockerComposeConfig = {
  version: string;
  services: {
    [key: string]: Service;
  };
  volumes?: {
    [key: string]: null;
  };
};
