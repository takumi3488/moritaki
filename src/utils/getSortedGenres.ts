import { Genre, GenresAndSubGenres } from "./types";

export const getSortedGenres = (data: GenresAndSubGenres): Genre[] => {
  const genres: Genre[] = []
  const frontmatters = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
  frontmatters.forEach(frontmatter => {
    const { genre, subgenre } = frontmatter
    const i = genres.findIndex(g => g.name === genre);
    if (i === -1) {
      const newGenre: Genre = {
        name: genre,
        count: 1,
        subgenres: [{
          name: subgenre,
          count: 1
        }]
      }
      genres.push(newGenre)
    } else {
      genres[i].count++
      const j = genres[i].subgenres.findIndex(s => s.name === subgenre)
      if (j === -1) {
        genres[i].subgenres.push({ name: subgenre, count: 1 })
      } else {
        genres[i].subgenres[j].count++
      }
    }
  })
  const sortedGenres = genres.map(genre => {
    return { ...genre, subgenres: genre.subgenres.sort((a, b) => b.count - a.count) }
  }).sort((a, b) => b.count - a.count)
  return sortedGenres
}
