const algoliaQuery = `
  {
    allGraphCmsProduct {
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
      }
    }
  }
`;

module.exports = algoliaQuery;