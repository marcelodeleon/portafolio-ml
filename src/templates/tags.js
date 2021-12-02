import React from "react"
import Layout from "../components/Layout"
import PropTypes from "prop-types"
import * as styles from "../styles/home.module.css"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <div style={{ padding: "8em 8em 10em" }}>
        <div style={{ display: "flex", "align-items": "center" }}>
          <img
            className={styles.icon}
            src={`../../icons/shopping.png`}
            alt="Tag icon"
          />
          <h1>{tag}</h1>
        </div>
        <ul style={{ "padding-top": "2em" }}>
          {edges.map(({ node }) => {
            const { title, slug, headline } = node.frontmatter
            return (
              <li
                key={slug}
                style={{
                  "text-align": "center",
                  "list-style-type": "none",
                  "padding-bottom": "0.5em",
                }}
              >
                <Link style={{ color: "#FF5555" }} to={`/projects/${slug}`}>
                  {title}: {headline}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            headline
            slug
          }
        }
      }
    }
  }
`
