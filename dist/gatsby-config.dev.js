"use strict";

module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    siteUrl: "https://www.yourdomain.tld"
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path: "".concat(__dirname, "/blog")
    }
  }, "gatsby-plugin-mdx"]
};