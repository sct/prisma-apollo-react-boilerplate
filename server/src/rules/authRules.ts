import { rule } from 'graphql-shield';
import { AuthError, Context } from '../utils';

export const isAuthenticated = rule()(async (parent, args, ctx: Context) => {
  console.debug('Checking auth');

  if (!ctx.user) {
    return new AuthError();
  }

  return true;
});

