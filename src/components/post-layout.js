import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostLayout = props => {
  const { post, siteTitle, location } = props

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title.rendered} description={post.content.rendered} />
      <Link style={{ boxShadow: `none` }} to="en">
        EN
      </Link>{" "}
      <Link style={{ boxShadow: `none` }} to="fr">
        FR
      </Link>{" "}
      <Link style={{ boxShadow: `none` }} to="es">
        ES
      </Link>
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title.rendered}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {/* {post.date} */}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {/* <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li> */}
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostLayout
