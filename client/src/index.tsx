import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { gql } from 'apollo-boost';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: process.env.APOLLO_SERVER || 'http://localhost:4000',
  credentials: 'include',
  resolvers: {},
  typeDefs: gql`
    extend type Query {
      locale: String!
    }
  `
});

const GET_PROFILE = gql`
  query getProfile {
    me {
      id
      email
    }
  }
`;

const locale =
  window.location.search.replace('?locale=', '') ||
  localStorage.getItem('locale') ||
  'ja';
localStorage.setItem('locale', locale);

client.cache.writeData({
  data: {
    locale: locale
  }
});

client.query({
  query: GET_PROFILE
});

ReactDOM.render(<App client={client} />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp client={client} />,
      document.getElementById('root')
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
