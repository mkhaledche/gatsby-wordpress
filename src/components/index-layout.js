import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = props => {
  const { posts, pages, cats, siteTitle, location, lang } = props
  let homeString
  if (lang === "en") {
    homeString = "jesus-is-muslim"
  } else if (lang === "fr") {
    homeString = "accueil"
  } else if (lang === "es") {
    homeString = "jesus-es-musulman"
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {cats.map(cat => {
        let parentCat = cats.find(
          parent => cat.node.alternative_parent == parent.node.alternative_id
        )
        let catPosts = posts.filter(
          post => post.node.categories[0] == cat.node.alternative_id
        )
        let catPages = pages.filter(
          page => page.node.categories[0] == cat.node.alternative_id
        )
        console.log(parentCat)
        return (
          <section>
            <h2>
              <Link
                style={{ boxShadow: `none` }}
                to={
                  typeof parentCat != "undefined"
                    ? `${lang}/category/${parentCat.node.slug}/${cat.node.slug}`
                    : `${lang}/category/${cat.node.slug}`
                }
              >
                {cat.node.name}
              </Link>
            </h2>
            {catPosts.map(post => {
              const title = post.node.title.rendered || post.node.slug
              return (
                <article key={post.node.slug}>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`${lang}/${homeString}/${post.node.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.node.excerpt.rendered,
                      }}
                    />
                  </section>
                </article>
              )
            })}
            {catPages.map(page => {
              const title = page.node.title.rendered || page.node.slug
              const postCat = cats.find(
                cat => page.node.categories[0] == cat.node.alternative_id
              )
              return (
                <article key={page.node.slug}>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={
                          typeof parentCat != "undefined"
                            ? `${lang}/${homeString}/${parentCat.node.slug}/${cat.node.slug}/${page.node.slug}`
                            : `${lang}/${homeString}/${cat.node.slug}/${page.node.slug}`
                        }
                      >
                        {title}
                      </Link>
                    </h3>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: page.node.excerpt.rendered,
                      }}
                    />
                  </section>
                </article>
              )
            })}
          </section>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
