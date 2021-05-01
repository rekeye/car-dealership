import * as React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { ALL_PUBLISHED_CARS } from '../queries/allPublishedCars'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TestDiv = styled.div`
  height: 300vh;
  width: 100%;
`

const IndexPage = () => {
  const { loading, error, data } = useQuery(ALL_PUBLISHED_CARS)

  if ( loading ) return null
  if ( error ) return console.log(`error with ALL_PUBLISHED_CARS query - ${error}`)

  console.log(`ALL_PUBLISHED_CARS query correctly fetched - ${data}`)

  return (
    <Layout>
      <Seo title='Strona główna' />
      <TestDiv/>
    </Layout>
  )
}

export default IndexPage
