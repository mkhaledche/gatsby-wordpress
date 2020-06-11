import React from "react"
import { graphql } from "gatsby"

import BlogPostLayout from "../components/post-layout"

const EnglishPost = ({ data, pageContext, location }) => {
  const post = data.poSten

  return <BlogPostLayout post={post} location={location} />
}

export default EnglishPost

export const pageQuery = graphql`
  query($id: String!) {
    poSten(id: { eq: $id }) {
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
