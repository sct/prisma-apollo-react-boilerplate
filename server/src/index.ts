import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as cookieParser from 'cookie-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';
import * as cors from 'cors';
import { prisma } from './generated/prisma-client';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { getUserByCookie } from './utils';
import { permissions } from './rules/permissions';
import config from './config';

const app = express();

const corsOptions = {
  origin: config.corsOptions,
  credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());

const schema = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers }),
  permissions
);

const server = new ApolloServer({
  schema,
  context: async ctx => {
    const newContext = { ...ctx, prisma };
    return {
      ...newContext,
      user: await getUserByCookie(newContext)
    };
  },
  tracing: true
});

server.applyMiddleware({ app, path: '/', cors: corsOptions });

app.listen({ port: 4000 }, () => {
  console.log(
    `🚀 Server is running on http://localhost:4000${server.graphqlPath}`
  );
});
