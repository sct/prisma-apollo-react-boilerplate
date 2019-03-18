import { Context } from '../../utils';
import { PostCreateInput } from '../../generated/prisma-client';

export const post = {
  async createPost(parent, { input }:{ input: PostCreateInput }, ctx: Context) {
    return ctx.prisma.createPost(input);
  },

  async deletePost(parent, { id }, ctx: Context) {
    const postExists = await ctx.prisma.$exists.post({
      id
    });
    if (!postExists) {
      throw new Error(`Post not found`);
    }
    return ctx.prisma.deletePost({ id });
  }
};
