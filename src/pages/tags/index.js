import React from "react"
import PropTypes from "prop-types"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../../components/Layout'
import Tag from '../../components/Tag'
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div>
      <Helmet title={title} />
      <h1>Tags</h1>
    <p>
      Selecciona una habilidad para filtrar los proyectos.
    </p>

    {group.map(tag => (
      <Tag name={tag.fieldValue} />
    ))}
    </div>
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
