import { buildFederatedSchema } from '@apollo/federation';
import { gql } from 'apollo-server';

import typeDefs from './types.gql';
import resolvers from './resolvers';

export default buildFederatedSchema([{ typeDefs: gql(typeDefs), resolvers }]);
