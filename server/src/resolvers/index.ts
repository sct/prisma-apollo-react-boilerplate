import { Query } from './Query';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { Post } from './Post';

export default {
  Query,
  Post,
  Mutation: {
    ...post
  },
};
