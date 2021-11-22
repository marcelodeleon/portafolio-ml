import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from '../styles/project-details.module.css'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, headline, featured } = data.markdownRemark.frontmatter

  const featuredImg = getImage(featured)

  return (
    <Layout>
      <section className={styles.featured}>
        <h1>{title}</h1>
        <p className={styles.subheading}>{headline}</p>
        <GatsbyImage image={featuredImg} alt="Featured Image" />
      </section>
      <div className={styles.details}>
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
        featured {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
