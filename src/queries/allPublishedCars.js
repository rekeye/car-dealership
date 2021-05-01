import gql from '@apollo/client'

export const ALL_PUBLISHED_CARS = gql`
    query ALL_PUBLISHED_CARS {
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
`