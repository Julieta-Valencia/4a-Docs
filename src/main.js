import { onError } from 'apollo-link-error';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { ApolloLink } from 'apollo-link';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors);
    }
    if (networkError) {
      console.log('networkError', networkError);
    }
  });

const httpLink = createHttpLink({
 uri: 'https://apigateway-services-app.herokuapp.com/',
})

const link = ApolloLink.from([errorLink, httpLink]);

const apolloClient = new ApolloClient({
 link,
 cache: new InMemoryCache()
})

const apolloProvider = new createApolloProvider({
 defaultClient: apolloClient
})

createApp(App).use(router).use(apolloProvider).mount('#app')
