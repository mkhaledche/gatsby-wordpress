import React from "react"
import { graphql } from "gatsby"

import CategoryIndex from "../components/category-layout"

const SpanishCategory = ({ data, pageContext, location }) => {
  const posts = data.allPoStes.edges.slice(0, data.allPoStes.edges.length - 1)
  const pages = data.allPageEs.edges.slice(0, data.allPageEs.edges.length - 1)
  const cats = data.allCAtes.edges.slice(0, data.allCAtes.edges.length - 1)
  const { cat_id } = pageContext

  return (
    <div></div>
    // <CategoryIndex
    //   posts={posts}
    //   pages={pages}
    //   cats={cats}
    //   location={location}
    //   lang="es"
    //   catID={cat_id}
    // />
  )
}

export default SpanishCategory

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPageEs {
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
    allPoStes {
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
    allCAtes {
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
