import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { getSortedGenres } from '../../utils/getSortedGenres'
import { GenresAndSubGenres } from '../../utils/types'

const AsideList = () => {
  const data = useStaticQuery<GenresAndSubGenres>(graphql`
    query AllMdxWithGenreAndSubgenre {
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
  `)
  const genres = getSortedGenres(data)
  return (
    <>
      <span className='px-4 flex flex-col items-center mb-3'>
        <h2 className='inline-block font-bold md:text-lg lg:text-xl hover:text-blue-600 hover:underline mb-4'><Link to="/">TOPへ</Link></h2>
        <hr className='bg-gray-700 w-full' />
        <h2 className='inline-block font-bold text-gray-600 text-sm md:text-base lg:text-lg mt-4'>ジャンル一覧</h2>
      </span>
      <ul className='px-4 flex flex-col items-center text-blue-800 text-sm md:text-base'>
        {genres.map(genre => <li key={genre.name} className="pb-4">
          <Link to={`/genres/${genre.name}`} className="hover:text-blue-600 hover:underline">{genre.name}({genre.count})</Link>
          <ul className='px-4'>{genre.subgenres.map(subgenre => <li key={subgenre.name}>
            <Link to={`/subgenres/${subgenre.name}`} className="hover:text-blue-600 hover:underline">{subgenre.name}({subgenre.count})</Link>
          </li>)}</ul>
        </li>)}
      </ul>
    </>
  )
}

export default AsideList