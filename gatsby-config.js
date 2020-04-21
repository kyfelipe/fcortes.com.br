module.exports = {
  siteMetadata: {
    title: `Felipe Côrtes`,
    description: ``,
    author: `@kyfelipe`,
    siteUrl: 'https://fcortes.com.br'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/static/assets/posts`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `images`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-images-zoom`,
          `gatsby-remark-prismjs`
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felipe Côrtes Blog`,
        short_name: `FCôrtes`,
        description: ``,
        lang: `pt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1B68BF`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/assets/img/logo-icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
