# Prisma/Apollo/React Boilerplate

A quickstart framework for running a fullstack React/Apollo/Prisma application all in one solution.

## Development

Steps to get the development environment running

1. Clone this
2. `docker-compose up -d`
3. Perform the initial prisma deploy with: `docker-compose exec server npm run prisma -- deploy`
3. 🙌 We did it.

(You should probalby run a local `npm i` in the client directory so you can run developer tools outside of the containers)

You can access services now at the following addresses:
```
http://localhost:3000 - React Frontend
http://localhost:4000 - Apollo Server (GraphQL Playground)
http://localhost:4466 - Prisma Server (GraphQL Playground)
```

## Client Information

Client tech stack that you should know a bit about before working on this project:

- React 16.8 (Hooks!)
- Typescript
- Apollo Client
- React-intl

### Helpful Client Commands

- `npm run apollo:codegen` - Extract static types from apollo queries
- `npm run i18n:extract` - Extracts the translations from `defineMessages` helper into a single messages file
- `npm run i18n:manage` - Prepares translation files for provided languages [en, ja]

The above commands all have VSCode tasks included.

## Server Information

Server tech stack that you should know a bit about before working on this project:

- Typescript
- Apollo Server
- GraphQL
- Prisma

### Helpful Server Commands

- `docker-compose exec server npm run prisma -- deploy` - Deploy Prisma inside of the container
- `docker-compose exec server npm run prisma -- seed --reset` - Reseed the database. (Also resets the database and data loss _will_ occur!)
- `docker-compose exec server npm run prisma -- reset --force` - Reset Prisma database (This will delete all data!)

Prisma CLI commands need to be run _inside_ of the containers so the correct addresses are used.

## Adding Node Modules

Because we are running everything inside of containers, changes to `package.json` will not replicate inside of the container without restarting it. Make sure to always restart your docker containers after making any changes to installed modules.

## Useful development tools:
- [Apollo Client Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
- [Apollo GraphQL VSCode Extensions](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
