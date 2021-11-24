const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      postsRemark: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  data.postsRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

  const tags = data.tagsGroup.group
  const tagTemplate = path.resolve("src/templates/tags.js")

  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
