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
  ],
}
