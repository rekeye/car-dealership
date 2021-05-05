const algoliaQuery = `
  {
    products: allGraphCmsProduct {
      nodes {
        objectID: remoteId
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
        Kolor_nadwozia {
          name
        }
        Typ_nadwozia {
          name
        }
        Typ_paliwa {
          name
        }
        Skrzynia_biegow {
          name
        }
      }
    }
  }
`;

module.exports = algoliaQuery;