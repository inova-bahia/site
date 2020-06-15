module.exports = {
  siteMetadata: {
    title: `Movimento Inova Bahia`,
    description: `A simple description about with site...`,
    author: `Inova`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Movimento Inova Bahia`,
        short_name: `Inova`,
        start_url: `/`,
        background_color: `#004477`,
        theme_color: `#004477`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
