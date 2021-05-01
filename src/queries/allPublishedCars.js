import { graphql } from 'gatsby'

export const ALL_PUBLISHED_CARS = graphql`
  query ALL_PUBLISHED_CARS {
    gcms{
        products(orderBy: id_ASC) {
            id
            title
            slug
            price
            description
            model
            make
            mileage
            bodyType
            bodyColor
            fuelType
            transmissionType
            vin
            damaged
            notCrashed
          }
    }
  }
`
