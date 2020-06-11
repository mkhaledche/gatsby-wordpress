// const postType = {
//   id: 1,
//   name: "String",
//   slug: "String",
//   object: { a: 1, b: "2", c: false },
//   array: [{ a: 1, b: "2", c: false }],
// }

module.exports = {
  pathPrefix: `/gatsby/public`,
  siteMetadata: {
    title: `Jesus is Muslim`,
    description: `Discover Islam.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`,
    },
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "po__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/wp-json/wp/v2/posts?per_page=100`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `sten`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "page__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/wp-json/wp/v2/pages?per_page=100`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `en`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "c__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/wp-json/wp/v2/categories?per_page=20`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `aten`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "po__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/fr/wp-json/wp/v2/posts?per_page=100`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `stfr`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "page__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/fr/wp-json/wp/v2/pages?per_page=100`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `fr`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "c__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/fr/wp-json/wp/v2/categories?per_page=20`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `atfr`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "po__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/es/wp-json/wp/v2/posts?per_page=100`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `stes`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "page__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/es/wp-json/wp/v2/pages?per_page=100`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `es`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "c__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://jesus-is-muslim.net/es/wp-json/wp/v2/categories?per_page=20`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        name: `ates`,
      },
    },
  ],
}
