import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { GetAllPosts_posts } from './__generated__/GetAllPosts';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
      content
      createdAt
      author {
        id
        name
      }
    }
  }
`;

const Home: React.FC = () => (
  <Query query={GET_POSTS}>
    {({ data, loading, error }) => {
      if (error) {
        throw error;
      }

      if (loading) {
        return <div>Loading!</div>;
      }

      const { posts } = data;

      return posts.map((post: GetAllPosts_posts) => (
        <div>
          <h1>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h1>
          <p>{post.content}</p>
        </div>
      ));
    }}
  </Query>
);

export default Home;
