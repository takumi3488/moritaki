const graphqlConfig = require("./.cache/typegen/graphql.config.json");
module.exports = {
  ...graphqlConfig,
  plugins: ["gatsby-plugin-postcss"],
};
