const pageQuery = `{
    docs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/docs/"}}) {
      edges {
        node {
          frontmatter {
            title
            contextual_links {
              type
              name
              url
            }
          }
        }
        excerpt(pruneLength: 5000)
      }
    }
  }`

const flatten = arr => 
    arr.map(({ node: { frontmatter, ...rest }}) => ({
        ...frontmatter,
        ...rest,
    }))

const settings = { attributesToSnippet: [`excerpt: 20`] }

const queries = [{
    query: pageQuery,
    transformer: ({ data }) => flatten(data.docs.edges),
    indexName: `docs`,
    settings,
}]

module.exports = queries