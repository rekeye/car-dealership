import { ApolloClient, ApolloLink, createHttpLink } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const httpLink = createHttpLink({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cko1dd38yu4qc01yz84lf9k6z/master',
    fetch,
})
  
const link = ApolloLink.from([httpLink])
  
export const client = new ApolloClient({
    link,
    cache,
})