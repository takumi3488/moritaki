import { graphql, HeadFC, PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/Layout'



const BookReview: FC<PageProps<Queries.BookReviewPageQuery>> = ({ data }) => {
  const book = data.markdownRemark!
  return (
    <Layout title={`[書評]『${book.frontmatter!.title}』`} >
      <article className='bg-white w-full p-4 md:p-8'>
        <h2 className={`
            text-xl
            lg:text-2xl
            font-bold
            mb-4
            lg:mb-8
            text-center
            underline
            decoration-8
            decoration-[rgba(246,255,0,0.77)]
            underline-offset-[-0.2rem]
          `}
          style={{ textDecorationSkipInk: "none" }}>[書評]『{book.frontmatter!.title}』</h2>
        <section dangerouslySetInnerHTML={{ __html: book.html! }} className="markdown" />
      </article>
    </Layout >
  )
}

export const query = graphql`
  query BookReviewPage($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        difficulty
        genre
        publishedDate
        slug
        stars
        subgenre
        thumbnail
        title
        updatedDate
      }
      html
    }
  }
`

export default BookReview;

export const Head: HeadFC<Queries.BookReviewPageQuery> = ({ data }) => <title>[書評]『{data.markdownRemark!.frontmatter!.title}』</title>
