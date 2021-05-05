import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StyledLink, StyledGraphImg } from "./styledComponents"
import ChevronRight from "../assets/chevron-right.svg"
import { getPriceFormat } from "../hooks/getPriceFormat"

const Container = styled.div`
  background: #f1f1f1;
`
const InfoWrapper = styled.div`
  padding: 1em;
`
const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--black);
`
const Additional = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1em;
`
const Price = styled.p`
  font-size: 1.4rem;
  color: var(--base-dark-red);
`
const RedCTA = styled.div`
  padding: 0.8em;
  background: var(--base-dark-red);
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
`

const Post = ({
  data: { slug, images, title, mileage, transmissionType, bodyType, price },
}) => (
  <StyledLink to={`/oferty/${slug}`}>
    <Container>
      <StyledGraphImg image={images[0]} maxWidth={960} withWebp alt={title} />
      <InfoWrapper>
        <Title>{title}</Title>
        <Additional>
          <div>{mileage} km</div>
          <div>{transmissionType}</div>
          <div>{bodyType.replace("_", " ")}</div>
        </Additional>
        <Price>{getPriceFormat(price)}</Price>
      </InfoWrapper>
      <RedCTA>
        Sprawdź ofertę <ChevronRight />
      </RedCTA>
    </Container>
  </StyledLink>
)

Post.propTypes = {
  data: PropTypes.object,
}

Post.defaultProps = {
  data: {},
}

export default Post
