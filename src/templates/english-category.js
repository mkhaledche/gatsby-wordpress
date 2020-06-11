import React from "react"
import { graphql } from "gatsby"

import CategoryIndex from "../components/category-layout"

const EnglishCategory = ({ data, pageContext, location }) => {
  const posts = data.allPoSten.edges.slice(0, data.allPoSten.edges.length - 1)
  const pages = data.allPageEn.edges.slice(0, data.allPageEn.edges.length - 1)
  const cats = data.allCAten.edges.slice(0, data.allCAten.edges.length - 1)
  const { cat_id } = pageContext

  return (
    <CategoryIndex
      posts={posts}
      pages={pages}
      cats={cats}
      location={location}
      lang="en"
      catID={cat_id}
    />
  )
}

export default EnglishCategory

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPageEn {
      edges {
        node {
          alternative_id
          categories
          title {
            rendered
          }
          content {
            rendered
          }
          excerpt {
            rendered
          }
          wpml_current_locale
          slug
        }
      }
    }
    allPoSten {
      edges {
        node {
          alternative_id
          categories
          title {
            rendered
          }
          content {
            rendered
          }
          excerpt {
            rendered
          }
          wpml_current_locale
          slug
        }
      }
    }
    allCAten {
      edges {
        node {
          alternative_id
          alternative_parent
          name
          slug
        }
      }
    }
  }
`
