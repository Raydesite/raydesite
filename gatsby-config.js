module.exports = {
  siteMetadata: {
    title: "Raydesite",
    siteUrl: `https://raydesite.com`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
