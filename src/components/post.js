import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Container = styled.article``
const Title = styled.h3``
const Additional = styled.ul`
    li {
        display: inline;
    }
`
const Price = styled.p``

const Post = ({ data: { slug, image, title, mileage, transmissionType, bodyType, price } }) => (
    <Link to={ slug }>
        <Container>
            <GatsbyImage image={} alt={ title }/>
            <Title>{ title }</Title>
            <Additional>
                <li>{ mileage }</li>
                <li>{ transmissionType }</li>
                <li>{ bodyType }</li>
            </Additional>
            <Price>{ price }</Price>
        </Container>
    </Link>
)

Post.propTypes = {
    data: PropTypes.object,
}

Post.defaultProps = {
    data: {},
}

export default Post;