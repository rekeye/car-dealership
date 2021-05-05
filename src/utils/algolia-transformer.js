const algoliaTransformer = ({
  data: { products }
}) =>
  products.nodes.map(
    ({ 
        ...product
    }) => ({
        ...product
    })
  )

module.exports = algoliaTransformer;