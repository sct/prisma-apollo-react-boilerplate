/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPost
// ====================================================

export interface GetPost_post_author {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetPost_post {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: GetPost_post_author;
}

export interface GetPost {
  post: GetPost_post;
}

export interface GetPostVariables {
  id: string;
}
