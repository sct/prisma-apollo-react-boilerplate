import * as jwt from 'jsonwebtoken';
import { Prisma, User, ID_Input } from './generated/prisma-client';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import config from './config';

export interface Context extends ExpressContext {
  prisma: Prisma;
  user?: User;
}

export async function getUserByCookie(ctx: Context) {
  const { authToken } = ctx.req.cookies;
  const { prisma } = ctx;
  if (authToken) {
    const { userId: id } = jwt.verify(authToken, config.appSecret) as {
      userId: ID_Input;
    };

    try {
      const user = await prisma.user({ id });

      return user;
    } catch (e) {
      console.log(e.message);
    }
  }

  return null;
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
