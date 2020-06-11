const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postEn = await graphql(`
    {
      allPoSten {
        nodes {
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
      }
    }
  `)

  const pageEn = await graphql(`
    {
      allPageEn {
        nodes {
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
      }
    }
  `)

  const catEn = await graphql(`
    {
      allCAten {
        nodes {
          id
          alternative_id
          alternative_parent
          name
          slug
        }
      }
    }
  `)

  const postFr = await graphql(`
    {
      allPoStfr {
        nodes {
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
      }
    }
  `)

  const pageFr = await graphql(`
    {
      allPageFr {
        nodes {
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
      }
    }
  `)

  const catFr = await graphql(`
    {
      allCAtfr {
        nodes {
          id
          alternative_id
          alternative_parent
          name
          slug
        }
      }
    }
  `)

  const postEs = await graphql(`
    {
      allPoStes {
        nodes {
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
      }
    }
  `)

  const pageEs = await graphql(`
    {
      allPageEs {
        nodes {
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
      }
    }
  `)

  const catEs = await graphql(`
    {
      allCAtes {
        nodes {
          id
          alternative_id
          alternative_parent
          name
          slug
        }
      }
    }
  `)

  const { allPoSten } = postEn.data
  const { allPoStfr } = postFr.data
  const { allPoStes } = postEs.data
  const { allPageEn } = pageEn.data
  const { allPageFr } = pageFr.data
  const { allPageEs } = pageEs.data
  const { allCAten } = catEn.data
  const { allCAtfr } = catFr.data
  const { allCAtes } = catEs.data

  const createLangIndices = (lang, template) => {
    let indexTemplate = path.resolve(`./src/templates/${template}.js`)
    createPage({
      path: `/${lang}`,
      component: slash(indexTemplate),
      context: {
        lang: lang,
      },
    })
  }

  createLangIndices("en", "english-index")
  createLangIndices("fr", "french-index")
  createLangIndices("es", "spanish-index")

  const createCatIndices = (catObj, lang, template) => {
    catObj.nodes.forEach(edge => {
      let catTemplate = path.resolve(`./src/templates/${template}.js`)
      // let childCats = catObj.nodes.filter(
      //   child => child.alternative_parent == edge.alternative_id
      // )
      // let childCatIds = []
      // childCats.map((item, index) => {
      //   childCatIds = [...childCatIds, item.alternative_id]
      // })
      // let catPages = pageObj.nodes
      //   .slice(0, pageObj.nodes.length - 1)
      //   .filter(
      //     page =>
      //       page.categories[0] != null &&
      //       (page.categories[0] == edge.alternative_id ||
      //         childCatIds.indexOf(page.categories[0]) > -1)
      //   )
      let parentCat = catObj.nodes.find(
        parent => parent.alternative_id == edge.alternative_parent
      )
      createPage({
        path:
          typeof parentCat != "undefined"
            ? `/${lang}/category/${parentCat.slug}/${edge.slug}/`
            : `/${lang}/category/${edge.slug}/`,
        component: catTemplate,
        context: {
          cat_id: edge.alternative_id,
        },
      })
    })
  }
  createCatIndices(allCAten, "en", "english-category")
  createCatIndices(allCAtfr, "fr", "french-category")
  createCatIndices(allCAtes, "es", "spanish-category")
  const createLangPages = (
    pageObj,
    lang,
    catObj,
    homeString,
    pageType,
    template
  ) => {
    let relatedCategory
    let pageTemplate = path.resolve(`./src/templates/${template}.js`)

    pageObj.nodes.forEach(edge => {
      relatedCategory =
        edge.categories != null && edge.categories.length > 0
          ? catObj.nodes.find(cat => edge.categories[0] === cat.alternative_id)
          : null
      parentCategory =
        typeof relatedCategory !== "undefined" && relatedCategory !== null
          ? catObj.nodes.find(
              cat => relatedCategory.alternative_parent === cat.alternative_id
            )
          : null
      if (edge.alternative_id != null) {
        createPage({
          path:
            typeof relatedCategory != "undefined" &&
            relatedCategory != null &&
            relatedCategory.alternative_id != 1 &&
            relatedCategory.alternative_id != 14 &&
            relatedCategory.alternative_id != 23
              ? typeof parentCategory !== "undefined" && parentCategory !== null
                ? `/${lang}/${homeString}/${parentCategory.slug}/${relatedCategory.slug}/${edge.slug}/`
                : `/${lang}/${homeString}/${relatedCategory.slug}/${edge.slug}/`
              : typeof relatedCategory == "undefined" || relatedCategory == null
              ? `/${lang}/${homeString}/${edge.slug}/`
              : `/${lang}/${edge.slug}/`,
          component: pageTemplate,
          context: {
            id: edge.id,
            lang: lang,
            cat:
              typeof relatedCategory !== "undefined" && relatedCategory !== null
                ? relatedCategory
                : null,
            pageType: pageType,
          },
        })
      }
    })
  }

  createLangPages(
    allPoSten,
    "en",
    allCAten,
    "jesus-is-muslim",
    "poSten",
    "english-post"
  )
  createLangPages(allPoStfr, "fr", allCAtfr, "accueil", "poStfr", "french-post")
  createLangPages(
    allPoStes,
    "es",
    allCAtes,
    "jesus-es-musulman",
    "poStes",
    "spanish-post"
  )
  createLangPages(
    allPageEn,
    "en",
    allCAten,
    "jesus-is-muslim",
    "pageEn",
    "english-page"
  )
  createLangPages(allPageFr, "fr", allCAtfr, "accueil", "pageFr", "french-page")
  createLangPages(
    allPageEs,
    "es",
    allCAtes,
    "jesus-es-musulman",
    "pageEs",
    "spanish-page"
  )
}
