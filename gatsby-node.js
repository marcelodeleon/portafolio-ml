const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      postsRemark: allMarkdownRemark(
        limit: 2000
      ) {
        nodes {
          frontmatter {
            slug
            tags
            date
            title
            headline
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

  const nodes = data.postsRemark.nodes
  const orderedProjects = nodes.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )

  console.log("printing nodes")
  orderedProjects.map(x => console.log(x.frontmatter))

  orderedProjects.forEach((node, index) => {
    actions.createPage({
      path: '/projects/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: {
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : orderedProjects[index - 1],
        next: index === (orderedProjects.length - 1) ? null : orderedProjects[index + 1],
      }
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
