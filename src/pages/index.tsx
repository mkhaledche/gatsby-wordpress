// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const languages = [
  {
    path: "/en",
    code: "en_US",
  },
  {
    path: "/fr",
    code: "fr_FR",
  },
  {
    path: "/es",
    code: "es_ES",
  },
]

// const refreshData = () => {
//   console.log("function called from inside")
//   var display = document.getElementById("firstname")
//   var mail = document.getElementById("mail").value
//   var name = document.getElementById("fname").value
//   var content = document.getElementById("content").value

//   var subject = document.getElementById("subject").value
//   var xmlhttp = new XMLHttpRequest()
//   xmlhttp.open("POST", "contact-form.php")
//   xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
//   xmlhttp.send(
//     "fname=" +
//       name +
//       "&subject=" +
//       subject +
//       "&content=" +
//       content +
//       "&mail=" +
//       mail
//   )
//   xmlhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       display.innerHTML = this.responseText
//     } else {
//       display.innerHTML = "Loading..."
//     }
//   }
// }
const LangIndex = ({ data, pageContext, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allPageEn.edges
  const [value, setValue] = useState("")

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")

  const getResults = async val => {
    fetch("http://jesus-is-muslim.net/wp-json/wp/v2/search?search=" + val)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-16046116-2"
        />
        <script src="http://jesus-is-muslim.net/gatsby/chat.js" />
      </Helmet>
      <SEO title="All posts" />
      <Bio />
      <Link style={{ boxShadow: `none` }} to="en">
        EN
      </Link>{" "}
      <Link style={{ boxShadow: `none` }} to="fr">
        FR
      </Link>{" "}
      <Link style={{ boxShadow: `none` }} to="es">
        ES
      </Link>
      <input
        value={value}
        onKeyUp={() => {
          getResults(value)
        }}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
      <div>
        <input
          type="text"
          id="fname"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <input
          type="email"
          id="mail"
          value={mail}
          onChange={e => {
            setMail(e.target.value)
          }}
        />
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={e => {
            setSubject(e.target.value)
          }}
        />
        <input
          type="text"
          id="content"
          value={content}
          onChange={e => {
            setContent(e.target.value)
          }}
        />
        <button
          onClick={() => {
            console.log("What's going on?")
            sendMail()
          }}
        >
          Send Email
        </button>
      </div>
      <p id="response"></p>
      {/* {posts.map(({ node }) => {
        let pagePath = languages.find(
          lang => lang.code === node.wpml_current_locale
        )
        const title = node.title || node.slug
        return (
          <article key={node.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={`${pagePath.path}/${node.slug}`}
                >
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.content,
                }}
              />
            </section>
          </article>
        )
      })} */}
    </Layout>
  )
}

export default LangIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    pageEn {
      id
    }
    allPageEn {
      edges {
        node {
          alternative_id
          categories
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
  }
`
