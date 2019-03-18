/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPosts
// ====================================================

export interface GetAllPosts_posts_author {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetAllPosts_posts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: GetAllPosts_posts_author;
}

export interface GetAllPosts {
  posts: GetAllPosts_posts[];
}
