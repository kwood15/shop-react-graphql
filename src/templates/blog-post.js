import React from 'react';
import { Link, graphql } from 'gatsby';

const Template = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <Link to="/blog">Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <h3>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;

export default Template;
