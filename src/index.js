import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from './schema/all';
import apiClient from './apiClient';

const server = new ApolloServer({
  playground: true,
  schema,
  context: () => ({
    apiClient,
  }),
});

const app = express();

server.applyMiddleware({
  app,
  path: '/graphql',
  playgroundPath: '/graphql/playground',
});

app.listen(4000, () => {
  console.log('Server ready http://localhost:4000/graphql');
});
