# inizio

Inizio is a tool to quickly generate a devcontainer configuration.
The objective with Inizio is to offload all the writing of configuration files for local development. All this while relying on the devcontainer.

for example if you quickly want a node js environment with a postgres database you can write this:

```bash
npx @cchalop1/inizio --devContainerImage node -service postgres
```

To install inizio:

```bash
npm install -g @cchalop1/inizio

```

## list of services avalables

- postgres
- redis
- keycloak
- mysql
- mongodb

## list of dev container images

- node
- go
- rust
- java
- php
- python
