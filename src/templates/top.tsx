import React, { FC } from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"
import { BookCardProps, Genre } from "../utils/types"
import Layout from "../components/Layout"
import BookCards from "../components/BookCards/BookCards"
import { createTitle } from "../utils/createTitle"


const TopPage: FC<PageProps<Queries.TopPageQuery>> = ({ data }) => {
  const books = data.allMarkdownRemark.edges.map(edge => edge.node!.frontmatter!) as BookCardProps[]
  return (
    <Layout>
      <BookCards books={books} />
    </Layout>
  )
}

export default TopPage

export const query = graphql`
  query TopPage {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___updatedDate}) {
      edges {
        node {
          frontmatter {
            slug
            difficulty
            genre
            publishedDate
            stars
            subgenre
            thumbnail
            title
            updatedDate
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>{createTitle()}</title>
