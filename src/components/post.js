import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GraphImg from "graphcms-image"
import { StyledLink } from "./styledComponents"

const Container = styled.div`
  width: 100%;
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
  justify-content: space-around;
  padding: 1em;
`
const Price = styled.p`
  font-size: 1.4rem;
  color: var(--base-dark-red);
`
const StyledGraphImg = styled(GraphImg)`
  width: inherit;
`

const Post = ({
  data: { slug, images, title, mileage, transmissionType, bodyType, price },
}) => (
  <StyledLink to={`/samochody/${slug}`}>
    <Container>
      <StyledGraphImg image={images[0]} maxWidth={960} withWebp alt={title}/>
      <InfoWrapper>
        <Title>{title}</Title>
        <Additional>
          <div>{mileage} km</div>
          <div>{transmissionType}</div>
          <div>{bodyType}</div>
        </Additional>
        <Price>
          {
            new Intl.NumberFormat("pl-PL", {
              style: "currency",
              currency: "PLN"
            }).format(price)
          }  
        </Price>
      </InfoWrapper>
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
