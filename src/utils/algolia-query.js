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
      images {
        handle
        height
        width
      }
      kolor_nadwozia {
        name
      }
      typ_nadwozia {
        name
      }
      typ_paliwa {
        name
      }
      skrzynia_biegow {
        name
      }
    }
  }
}
`

module.exports = algoliaQuery;