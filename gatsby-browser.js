import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './src/apollo/client'

export const wrapRootComponent = ({ Root }) => (
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>
)