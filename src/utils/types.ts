type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type Genre = {
  name: string
  count: number
  subgenres: {
    name: string
    count: number
  }[]
}

export type BookCardProps = RequiredNotNull<NonNullable<Queries.TopPageQuery["allMarkdownRemark"]["edges"][number]["node"]["frontmatter"]>>

export type GenresAndSubGenres = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          genre: string,
          subgenre: string
        }
      }
    }[]
  }
}