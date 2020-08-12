/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:`My first profolio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ictpuejzgz1v`,
        accessToken: `JoIS4uC2METu1y9zjXMAe0F4rAAPQ3hzeCgai1plX3M`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-plugin-manifest`,
      options: {
        name:`Min's Personal Blog`,
        short_name:`Personal Blog`,
        start_url:`/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon:`src/images/MyLogo2.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxwidth: 750,
              linkImagesToOriginal: false
            }
          },
          // {
          //   resolve:`gatsby-remark-images-contentful`,
          //   options:{
          //     maxwidth:750,
          //   }
          // }
        
        ]
      }
    }
  ]
}
