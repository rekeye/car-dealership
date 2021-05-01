import React from 'react'
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://api-eu-central-1.graphcms.com/v2/cko1dd38yu4qc01yz84lf9k6z/master',
        fetch
    })
})

export const wrapRootElement = ({ element }) => <ApolloProvider client={ client }>{ element }</ApolloProvider>