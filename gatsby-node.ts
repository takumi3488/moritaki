import { CreatePagesArgs, GatsbyNode } from 'gatsby'
import path from 'path'
import { getSortedGenres } from './src/utils/getSortedGenres'
import { Genre, GenresAndSubGenres } from './src/utils/types'

type GraphQL = CreatePagesArgs["graphql"]
type CreatePage = CreatePagesArgs["actions"]["createPage"]

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions: { createPage } }) => {
  await createGenrePages(graphql, createPage)
  await createBookReviewPages(graphql, createPage)
}

// ジャンルごとのページと、TOPページでのジャンルごとのリンクの作成
const createGenrePages = async (graphql: GraphQL, createPage: CreatePage) => {
  // ジャンルとサブジャンルの取得
  const res = await graphql<GenresAndSubGenres>(`
    query CreateGenrePages {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              genre
              subgenre
            }
          }
        }
      }
    }
  `)
  if (res.errors) throw res.errors

  // ジャンル一覧の整形
  const genres = getSortedGenres(res.data!)

  // トップページを作成
  createPage({
    path: `/`,
    component: path.resolve("src/templates/top.tsx"),
    context: {
      genres
    }
  })

  // ジャンルごとのページを作成
  genres.forEach(genre => {
    createPage({
      path: `/genres/${genre.name}`,
      component: path.resolve("src/templates/genre.tsx"),
      context: {
        genreName: genre.name
      }
    })
  })

  // サブジャンルごとのページを作成
  genres.flatMap(genre => genre.subgenres).map(subgenre => {
    createPage({
      path: `/subgenres/${subgenre.name}`,
      component: path.resolve("src/templates/subgenre.tsx"),
      context: {
        subgenreName: subgenre.name
      }
    })
  })
}


const createBookReviewPages = async (graphql: GraphQL, createPage: CreatePage) => {
  type CreateBookReviewPages = {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            slug: string
          }
        }
      }[]
    }
  }
  const res = await graphql<CreateBookReviewPages>(`
    query CreateBookReviewPages {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (res.errors) throw res.errors
  const slugs = res.data!.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.slug);
  slugs.forEach(slug => {
    createPage({
      path: `/book_reviews/${slug}`,
      component: path.resolve("src/templates/bookReview.tsx"),
      context: {
        slug
      }
    })
  })
}
