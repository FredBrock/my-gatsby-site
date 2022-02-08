import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = (source) => {
  console.log(source);
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>

      <ul>
        {source.data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query seoQueryAndSeoQuery1 {
    allFile {
      nodes {
        name
      }
    }
  }
`;

// export const query1332 = graphql`
//   query seoQueryAndSeoQuery2 {
//     site(siteMetadata: { title: {} }) {
//       id
//       siteMetadata {
//         title
//         description
//         siteUrl
//       }
//     }
//   }
// `;

export default BlogPage;
