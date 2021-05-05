import * as React from "react"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import { SectionTitle, PostsContainer } from "../components/styledComponents"
import Layout from "../components/layout"
import Seo from "../components/seo"
import StyledSearchBackgroundImage from "../components/SearchBackgroundImage"
import CustomHits from "../components/search/CustomHits"


const client = algoliasearch(
  'MK3FSZPUHO',
  '264b83beb1edff856fbe65bf47dd3c3d'
)

const OffersPage = () => (
    <Layout>
      <InstantSearch searchClient={client} indexName="car_dealership">
        <Seo title="Oferty" />
        <StyledSearchBackgroundImage/>
        <SectionTitle $padding>Wszystkie oferty: </SectionTitle>
        <PostsContainer>
          <CustomHits />
        </PostsContainer>
      </InstantSearch>
    </Layout>
  )

export default OffersPage
