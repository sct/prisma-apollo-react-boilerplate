import React, { Component } from 'react';
import DefaultClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';
import { InjectIntlContext } from './i18n/useFormatMessage';
import Home from './containers/Home';
import Post from './containers/Post';

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

const messages: any = {
  en: require('./i18n/locales/en.json'),
  ja: require('./i18n/locales/ja.json')
};

type AppProps = {
  client: DefaultClient<{}>;
};

class App extends Component<AppProps> {
  render() {
    const { client } = this.props;

    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Query
            query={gql`
              query getLocale {
                locale @client
              }
            `}
          >
            {({ data: { locale } }) => (
              <IntlProvider locale={locale} messages={messages[locale]}>
                <InjectIntlContext>
                    <Router>
                      <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/post/:id" component={Post} />
                      </Switch>
                    </Router>
                </InjectIntlContext>
              </IntlProvider>
            )}
          </Query>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
