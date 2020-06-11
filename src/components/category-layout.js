import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const CategoryIndex = props => {
  const { posts, pages, cats, siteTitle, location, lang, catID } = props
  let homeString
  if (lang === "en") {
    homeString = "jesus-is-muslim"
  } else if (lang === "fr") {
    homeString = "accueil"
  } else if (lang === "es") {
    homeString = "jesus-es-musulman"
  }
  const cat = cats.find(category => category.node.alternative_id == catID)
  let parentCat = cats.find(
    parent => cat.node.alternative_parent == parent.node.alternative_id
  )
  const childCats = cats.filter(child => child.alternative_parent == catID)
  const childCatIds = []
  childCats.map((item, index) => {
    childCatIds = [...childCatIds, item.alternative_id]
  })

  const catPages = pages.filter(
    page =>
      page.node.categories.indexOf(catID) > -1 ||
      childCatIds.indexOf(page.node.categories[0]) > -1
  )
  console.log(catPages)
  const catPosts = posts.filter(
    post =>
      post.node.categories.indexOf(catID) > -1 ||
      childCatIds.indexOf(post.node.categories[0])
  )
  //   const catPages = pageObj.nodes
  //     .slice(0, pageObj.nodes.length - 1)
  //     .filter(
  //       page =>
  //         page.categories[0] != null &&
  //         (page.categories[0] == edge.alternative_id ||
  //           childCatIds.indexOf(page.categories[0]) > -1)
  //     )

  //   let catPosts = posts.filter(
  //     post => post.node.categories[0] == cat.node.alternative_id
  //   )
  //   let catPages = pages.filter(
  //     page => page.node.categories[0] == cat.node.alternative_id
  //   )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
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
                        : `${lang}/${cat.node.slug}/${page.node.slug}`
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
    </Layout>
  )
}

export default CategoryIndex
