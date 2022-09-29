import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `moritaki`,
  },
  graphqlTypegen: true,
  pathPrefix: "moritaki",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            },
          },
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "books",
        "path": "./src/contents/books/",
      },
      __key: "books",
    },
  ],
};

export default config;
