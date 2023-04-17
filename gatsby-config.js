/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `EthnoContemporaryBallet`,
    description: `EthnoContemporaryBallet`,
    author: `Vlad `,
    siteUrl: `http://localhost:8000/`,
    fontsGoogle: `https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" `,
  },
  plugins: [
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken":'OJUxSBbQXZ4xnQk6wSg1eqJIOmvQgBCnLTgOlOrKEMI',
      "spaceId": 'lnh3vijug6rw',
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
  ,
};