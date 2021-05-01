import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledLink } from './styledComponents'

const Container = styled.div`
    width: min(30em, 100%);
    padding: 1em;
    background: #f1f1f1;
`
const Title = styled.h3`
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--black);
`
const Additional = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
`
const Price = styled.p`
    font-size: 1.4rem;
    color: var(--base-dark-red);
`
const Image = styled.img`
    width: 100%;
`

const Post = ({ data: { slug, images, title, mileage, transmissionType, bodyType, price } }) => (
    <StyledLink to={ `/samochody/${slug}` }>
        <Container>
            <Image src={ images[0].url } alt={ title }/>
            <Title>{ title }</Title>
            <Additional>
                <div>{ mileage }</div>
                <div>{ transmissionType }</div>
                <div>{ bodyType }</div>
            </Additional>
            <Price>{ price } PLN</Price>
        </Container>
    </StyledLink>
)

Post.propTypes = {
    data: PropTypes.object,
}

Post.defaultProps = {
    data: {},
}

export default Post;