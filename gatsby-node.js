exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      products: { nodes },
    }
  } = await graphql(`
    {
      products: allGraphCmsProduct(filter: {stage: {eq: PUBLISHED}}) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  nodes.forEach(({ id, slug }) => {
    createPage({
      path: `/oferty/${slug}`,
      component: require.resolve("./src/templates/postPage.js"),
      context: {
        id,
      },
    })
  })
}
