exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
        gcms: { products },
    }
  } = await graphql(`
    {
      gcms {
        products(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `)

  products.forEach(({ id, slug }) => {
    createPage({
      path: `/samochody/${slug}`,
      component: require.resolve("./src/templates/postPage.js"),
      context: {
        id,
      },
    })
  })
}
