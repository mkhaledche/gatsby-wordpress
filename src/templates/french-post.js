import React from "react"
import { graphql } from "gatsby"

import BlogPostLayout from "../components/post-layout"

const FrenchPost = ({ data, pageContext, location }) => {
  const post = data.poStfr

  return <BlogPostLayout post={post} location={location} />
}

export default FrenchPost

export const pageQuery = graphql`
  query($id: String!) {
    poStfr(id: { eq: $id }) {
      id
      alternative_id
      slug
      wpml_current_locale
      categories
      title {
        rendered
      }
      excerpt {
        rendered
      }
      content {
        rendered
      }
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
