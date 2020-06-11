import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./layout.css"
// import "./chat"
import { Helmet } from "react-helmet"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-16046116-2"
        />
        <script src="http://jesus-is-muslim.net/gatsby/chat.js" />
      </Helmet>

      <header>{header}</header>
      <main>{children}</main>
      <div class="textwidget custom-html-widget">
        <div
          class="fb-page fb_iframe_widget"
          data-href="https://www.facebook.com/JesusisMuslimNet1/"
          data-tabs="timeline"
          data-height="400px"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          fb-xfbml-state="rendered"
          fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=166733127509115&amp;container_width=470&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FJesusisMuslimNet1%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
        >
          <span style={{ width: 340, height: 400 }}>
            <iframe
              name="f2204ca82b9a00c"
              width="1000px"
              height="400px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&amp;app_id=166733127509115&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df2b26b82a756bd%26domain%3Djesus-is-muslim.net%26origin%3Dhttps%253A%252F%252Fjesus-is-muslim.net%252Fff7f4748f52fc%26relation%3Dparent.parent&amp;container_width=470&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FJesusisMuslimNet1%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
              class=""
            ></iframe>
          </span>
        </div>

        <div id="fb-root" class=" fb_reset">
          <div style={{}}>
            <div></div>
          </div>
        </div>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
