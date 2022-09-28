import React, { FC } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { BookCardProps, Genre } from "../utils/types"
import Layout from "../components/Layout"
import BookCards from "../components/BookCards/BookCards"


const GenrePage: FC<PageProps<Queries.SubgenrePageQuery>> = ({ data }) => {
  const books = data.allMarkdownRemark.edges.map(edge => edge.node!.frontmatter!) as BookCardProps[]
  return (
    <Layout>
      <BookCards books={books} />
    </Layout>
  )
}

export default GenrePage

export const query = graphql`
  query SubgenrePage($subgenreName: String!) {
    allMarkdownRemark(
    sort: {order: DESC, fields: frontmatter___updatedDate}
    filter: {frontmatter: {subgenre: {eq: $subgenreName}}}
  ) {
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

export const Head: HeadFC<Queries.SubgenrePageQuery, { subgenreName: string }> = ({ pageContext: { subgenreName } }) => <title>もりた記 | 「{subgenreName}」の書評一覧</title>
