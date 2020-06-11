import React from "react"
import { graphql } from "gatsby"

import BlogPostLayout from "../components/post-layout"

const SpanishPage = ({ data, pageContext, location }) => {
  const post = data.pageEs

  return <BlogPostLayout post={post} location={location} />
}

export default SpanishPage

export const pageQuery = graphql`
  query($id: String!) {
    pageEs(id: { eq: $id }) {
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
