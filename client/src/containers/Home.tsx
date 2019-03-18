import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { GetAllPosts_posts } from './__generated__/GetAllPosts';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  articles: {
    id: 'articles',
    defaultMessage: 'Articles'
  }
});

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

      return (
        <>
          <h1>
            <FormattedMessage {...messages.articles} />
          </h1>
          {posts.map((post: GetAllPosts_posts) => (
            <div>
              <h1>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h1>
              <p>{post.content}</p>
            </div>
          ))}
        </>
      );
    }}
  </Query>
);

export default Home;
