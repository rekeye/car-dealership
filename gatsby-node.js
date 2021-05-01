exports.createPages = async({graphql, actions: { createPage }}) => {
    const { gcms: { products }} = await graphql(`
        {
            gcms {
                products {
                    id
                    slug
                }
            }
        }
    `)

    products.forEach(({ id, slug }) => {
        createPage({
            path: `/samochody/${slug}`,
            component: require.resolve('./src/templates/PostPage.js'),
            context: {
                id,
            }
        })
    })
}