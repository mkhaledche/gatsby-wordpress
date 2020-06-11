import React from "react"
import { graphql } from "gatsby"

import BlogPostLayout from "../components/post-layout"

const EnglishPage = ({ data, pageContext, location }) => {
  const post = data.pageEn

  return <BlogPostLayout post={post} location={location} />
}

export default EnglishPage

export const pageQuery = graphql`
  query($id: String!) {
    pageEn(id: { eq: $id }) {
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
