import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
    me: User
  }

  type Mutation {
    createPost(input: PostInput!): Post!
    deletePost(id: ID!): Post!
    """
    This will also set a secure authToken cookie on clients that support it
    """
    login(email: String!, password: String!): AuthPayload!
  }

  input PostInput {
    title: String!
    content: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    author: User!
    title: String!
    content: String!
    createdAt: String!
  }
`;

export default typeDefs;
