import React, { FC } from 'react'

type Props = {
  stars: number
}
const Stars: FC<Props> = ({ stars }) => {
  return (
    <span>
      {Array(stars).fill(null).map((_, i) => <FilledStar key={i} />)}
      {Array(5 - stars).fill(null).map((_, i) => <OutlinedStar key={i} />)}
    </span>
  )
}

const FilledStar: FC = () => {
  return <span>★</span>
}

const OutlinedStar: FC = () => {
  return <span>☆</span>
}

export default Stars