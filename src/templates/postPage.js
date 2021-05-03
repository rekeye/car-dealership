import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Post from "../components/post"
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
    products: { nodes },
  },
}) => (
  <Layout>
    <Seo title={title} />
    <SectionTwoColumns $postpage>
      <div>
        <StyledGraphImg image={images[0]} maxWidth={960} withWebp alt={title} />
      </div>
      <div>
        <SectionTitle bigger padding>
          {title}
        </SectionTitle>
        <Price>{getPriceFormat(price)}</Price>
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
    <SectionTwoColumns $margin $postpage>
      <div>
        <SectionTitle padding>Szczegóły: </SectionTitle>
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
        <SectionTitle padding>Opis pojazdu: </SectionTitle>
        <p>{description}</p>
      </div>
      <div>
        <SectionTitle padding>Inne oferty: </SectionTitle>
        <SectionTwoColumns $postpage>
          {nodes.map(node => (
            <div><Post key={node.slug} data={node} /></div>
          ))}
        </SectionTwoColumns>
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
        handle
        height
        width
      }
    }
    products: allGraphCmsProduct(limit: 2) {
      nodes {
        title
        slug
        price
        mileage
        bodyType
        transmissionType
        fuelType
        images {
          handle
          height
          width
        }
      }
    }
  }
`

export default PostPage
