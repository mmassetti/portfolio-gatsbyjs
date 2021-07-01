/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Matias Massetti Portfolio",
    description: "This is Matias Massetti Portfolio Site",
    author: "@MatiasMassetti",
    twitterUsername: "@MatiasMassetti",
    image: "/twitter-img.png",
    siteUrl: "https://matiasmassetti.netlify.app",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portfolio-strapi-mmassetti.herokuapp.com`,
        queryLimit: 5000, // Default to 100
        collectionTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            {
              family: `Open Sans`,
            },
          ],
        },
      },
    },
  ],
}
