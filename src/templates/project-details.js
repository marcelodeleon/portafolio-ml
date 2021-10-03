import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import * as styles from '../styles/project-details.module.css'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, headline } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{headline}</h3>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        headline
      }
    }
  }
`
