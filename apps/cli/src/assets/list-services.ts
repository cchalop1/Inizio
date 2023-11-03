import { DevcontainerService } from '../types/types';

export const services: DevcontainerService[] = [
  {
    icon: 'postgres.png',
    name: 'postgres',
    image: 'postgres:latest',
    volume: '/var/lib/postgresql/data',
    port: '5432',
    env: ['POSTGRES_PASSWORD', 'POSTGRES_USER', 'POSTGRES_DB'],
  },
  {
    icon: 'redis.png',
    name: 'redis',
    image: 'redis:latest',
    port: '6379',
    env: ['REDIS_PASSWORD'],
    volume: '/data',
  },
  {
    icon: 'mongo.webp',
    name: 'mongo',
    image: 'mongo:latest',
    port: '27017',
    env: ['MONGO_INITDB_ROOT_USERNAME', 'MONGO_INITDB_ROOT_PASSWORD'],
    volume: '/data/db',
  },
  {
    icon: 'mysql.png',
    name: 'mysql',
    image: 'mysql:latest',
    port: '3306',
    env: ['MYSQL_ROOT_PASSWORD', 'MYSQL_DATABASE'],
    volume: '/var/lib/mysql',
  },
  {
    icon: 'keycloak.png',
    name: 'keycloak',
    image: 'jboss/keycloak',
    port: '8080',
    env: ['KEYCLOAK_USER', 'KEYCLOAK_PASSWORD'],
    volume: '/opt/jboss/keycloak/standalone/data',
  },
];
