import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"
import {
  SectionTitle,
  SectionTwoColumns,
  StyledGraphImg,
  StyledLink,
} from "../components/styledComponents"
import ContactMail from "../assets/contact-mail.svg"
import Contact from "../assets/contact.svg"
import { getPriceFormat } from "../hooks/getPriceFormat"

const Price = styled.p`
  margin-bottom: 1em;
  font-size: 2rem;
  color: var(--base-dark-red);
`

const PostPage = ({
  data: {
    product: {
      title,
      description,
      price,
      vin,
      mileage,
      model,
      make,
      bodyType,
      bodyColor,
      transmissionType,
      fuelType,
      damaged,
      notCrashed,
      images,
    },
  },
}) => (
  <Layout>
    <Seo title={title} />
    <StyledGraphImg image={images[0]} maxWidth={960} withWebp alt={title} />
    <SectionTwoColumns $postpage>
      <div>
        <SectionTitle bigger padding>
          {title}
        </SectionTitle>
        <Price>{getPriceFormat(price)}</Price>
      </div>
      <div>
        <StyledLink to="/kontakt" $solidcta>
          {" "}
          Kontakt w sprawie ogłoszenia <ContactMail />{" "}
        </StyledLink>
        <StyledLink to="#" $cta>
          {" "}
          Zadzwoń do nas <Contact />{" "}
        </StyledLink>
      </div>
    </SectionTwoColumns>
    <SectionTwoColumns $postpage>
      <div>
        <SectionTitle>Szczegóły: </SectionTitle>
        <SectionTwoColumns $postpage>
          <div>
            <p>VIN: {vin}</p>
            <p>Przebieg: {mileage} km</p>
            <p>Marka: {make}</p>
            <p>Model: {model}</p>
            <p>Uszkodzony: {damaged}</p>
          </div>
          <div>
            <p>Typ nadwozia: {bodyType}</p>
            <p>Kolor nadwozia: {bodyColor}</p>
            <p>Skrzynia biegów: {transmissionType}</p>
            <p>Paliwo: {fuelType}</p>
            <p>Powypadkowy: {notCrashed}</p>
          </div>
        </SectionTwoColumns>
      </div>
      <div>
        <SectionTitle padding>Opis pojazdu: </SectionTitle>
        <p>{description}</p>
      </div>
    </SectionTwoColumns>
  </Layout>
)

export const pageQuery = graphql`
  query postPageQuery($id: String!) {
    product: graphCmsProduct(id: { eq: $id }) {
      title
      description
      price
      vin
      mileage
      model
      make
      bodyType
      bodyColor
      transmissionType
      fuelType
      damaged
      notCrashed
      images {
        id
        handle
        fileName
        mimeType
        url
      }
    }
  }
`

export default PostPage
