import React from "react"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <div style={{ color: `teal` }}>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
