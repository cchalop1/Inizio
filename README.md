# Inizio: DevContainer Config Generator

Welcome to Inizio, an open-source tool designed to streamline the process of generating development container configurations for your projects. Inizio simplifies setting up a development environment with support for various databases and the option to use a custom Dockerfile, making it easier for developers to get started with containerized project environments.

![Screen web](https://raw.githubusercontent.com/cchalop1/Inizio/main/assets/web.png)

## Features

- Generate development container configurations with a simple command.
- Support for specifying a custom Dockerfile.
- Options to integrate various databases into your development environment, including PostgreSQL, Redis, MongoDB, MySQL, and Keycloak.

## Getting Started

### Prerequisites

- Ensure you have Node.js installed on your system to use `npx`.
- Docker must be installed and running on your machine to utilize development containers.

### Installation

Inizio doesn't require a separate installation process. You can run it directly using `npx` to avoid global installation and keep your environment clean.

### Usage

To generate a development container configuration, use the following command:

```sh
npx @cchalop1/inizio --devContainerImage node
```

If you have a local Dockerfile in your repo you don't need to specify`--devContainerImage`

#### Database Selection

Inizio allows you to integrate a database into your development environment. To specify your choice, use the `-s` option followed by the database name. Supported databases include:

- `postgres`
- `redis`
- `mongo`
- `mysql`
- `keycloak`

Example command to generate a configuration with PostgreSQL:

```sh
npx @cchalop1/inizio --devContainerImage node -s postgres
```

## Contributing

We welcome contributions to Inizio! If you're interested in helping improve this tool, please feel free to submit issues or pull requests on our GitHub repository.
