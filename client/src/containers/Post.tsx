import React from 'react';
import { useQuery, QueryHookResult } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { GetPost } from './__generated__/GetPost';

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
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

const Post: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { id: match.params.id }
  }) as QueryHookResult<GetPost, { id: string }>;

  if (error) {
    console.log('Something went very wrong!');
    return <div>Something broke</div>;
  }

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const { post } = data;

  return (
    <div>
      <article>
        <h1>{post.title}</h1>
        <h3>Written by {post.author.name}</h3>
        <p>{post.content}</p>
      </article>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default withRouter(Post);
