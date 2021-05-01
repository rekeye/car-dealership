import fetch from 'isomorphic-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://api-eu-central-1.graphcms.com/v2/cko1dd38yu4qc01yz84lf9k6z/master',
        fetch
    })
})