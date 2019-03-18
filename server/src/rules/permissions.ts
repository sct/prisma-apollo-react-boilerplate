import { isAuthenticated } from './authRules';
import { shield } from 'graphql-shield';

export const permissions = shield({
  Mutation: {
    createPost: isAuthenticated,
  },
});
