const algoliaTransformer = ({
  data: { products }
}) =>
  products.nodes.map(
    ({ 
        images,
        ...product
    }) => ({
        image: images[0],
        ...product
    })
  )

module.exports = algoliaTransformer;