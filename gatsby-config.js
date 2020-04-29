module.exports = {
  siteMetadata: {
    title: `Felipe Côrtes`,
    description: `Um blog sobre a cultura e tecnologias do mundo devops`,
    author: `@kyfelipe`,
    siteUrl: 'https://fcortes.com.br'
  },
  plugins: [
    `gatsby-plugin-transition-link`,
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
          `Merriweather`,
          `Open Sans`,
          `Spartan`
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
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              zIndex: 9999,
              background: `var(--background)`
            }
          },
          `gatsby-remark-lazy-load`,
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
        description: `Um blog sobre a cultura e tecnologias do mundo devops`,
        lang: `pt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/assets/img/logo-icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
