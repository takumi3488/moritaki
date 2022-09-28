import { Link } from 'gatsby'
import React, { FC } from 'react'
import { BookCardProps } from '../../utils/types'
import Stars from '../Stars/Stars'


const BookCards: FC<{ books: BookCardProps[] }> = ({ books }) => {
  return (
    <div className='w-full'>{books.map(book => (
      <article key={book.slug} className="flex mb-4 bg-white w-full">
        <img src={book.thumbnail} alt={`${book.title}のサムネイル`} className="w-20 md:w-28 lg:w-36" />
        <div className='p-2 md:p-4 w-full'>
          <Link to={`/book_reviews/${book.slug}`}>
            <h2 className='text-sm md:text-lg font-bold hover:text-blue-800 hover:underline'>
              {book.title}
            </h2>
          </Link>
          <div className='text-xs md:text-sm'>
            <p>
              投稿：{book.updatedDate}
            </p>
            <p>
              評価：<Stars stars={book.stars} />
            </p>
            <p>
              難易度：<Stars stars={book.difficulty} />
            </p>
            <p className='text-right'>
              <Link to={`/genres/${book.genre}`} className="hover:text-blue-800 hover:underline">{book.genre}</Link>
              <span className='px-2'>&gt;</span>
              <Link to={`/subgenres/${book.subgenre}`} className="hover:text-blue-800 hover:underline">{book.subgenre}</Link>
            </p>
          </div>
        </div>
      </article>
    ))}</div>
  )
}

export default BookCards
