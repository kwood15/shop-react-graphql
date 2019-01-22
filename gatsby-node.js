const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              path
              title
              date
              author
            }
            excerpt
          }
        }
      }
    }
  `)
    .then(res => {
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        });
      });
    })
    .catch(error => console.error(error));
};
