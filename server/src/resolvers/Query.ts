import { Context, AuthError } from '../utils';

export const Query = {
  posts(parent, args, ctx: Context) {
    return ctx.prisma.posts();
  },

  post(parent, { id }, ctx: Context) {
    return ctx.prisma.post({ id });
  },

  me(parent, args, ctx: Context) {
    if (!ctx.user) {
      return null;
    }

    return ctx.user;
  },
};
