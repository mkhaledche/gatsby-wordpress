import React from "react"
import { graphql } from "gatsby"

import CategoryIndex from "../components/category-layout"

const FrenchCategory = ({ data, pageContext, location }) => {
  const posts = data.allPoStfr.edges.slice(0, data.allPoStfr.edges.length - 1)
  const pages = data.allPageFr.edges.slice(0, data.allPageFr.edges.length - 1)
  const cats = data.allCAtfr.edges.slice(0, data.allCAtfr.edges.length - 1)
  const { cat_id } = pageContext

  return (
    <div></div>
    // <CategoryIndex
    //   posts={posts}
    //   pages={pages}
    //   cats={cats}
    //   location={location}
    //   lang="fr"
    //   catID={cat_id}
    // />
  )
}

export default FrenchCategory

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPageFr {
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
    allPoStfr {
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
    allCAtfr {
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
