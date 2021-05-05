const algoliaTransformer = ({
  data: { products }
}) =>
  products.nodes.map(
    ({ 
        ...product,
        images,
    }) => ({
        ...product,
        image: images[0]
    })
  );

module.exports = algoliaTransformer;