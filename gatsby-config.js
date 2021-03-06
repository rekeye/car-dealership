require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Premium Automotive`,
    description: `Cillum laboris exercitation eu labore eu duis reprehenderit elit officia cillum reprehenderit.`,
    author: `@rekeye`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Premium Automotive`,
        short_name: `Premium Auto`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-eu-central-1.graphcms.com/v2/cko1dd38yu4qc01yz84lf9k6z/master`,
        locales: [`pl`],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries: [
          {
            query: require("./src/utils/algolia-query"),
            transformer: require("./src/utils/algolia-transformer"),
          },
        ],
      },
    },
  ],
}
