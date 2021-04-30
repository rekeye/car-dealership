import * as React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestDiv = styled.div`
  height: 300vh;
  width: 100%;
`

const OffersPage = () => (
  <Layout>
    <Seo title="Oferty" />
    <TestDiv/>
  </Layout>
)

export default OffersPage
