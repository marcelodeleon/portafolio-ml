import React from "react"
import Layout from "../components/Layout"
import Tag from "../components/Tag"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, headline, featured, tags } = data.markdownRemark.frontmatter

  const featuredImg = getImage(featured)
  console.log({ tags })

  return (
    <Layout>
      <section className={styles.featured}>
        <h1>{title}</h1>
        <p className={styles.subheading}>{headline}</p>
        <div style={{ "margin-bottom": "3em" }}>
          {tags.map(tag => (
            <Tag name={tag} />
          ))}
        </div>
        <div style={{ display: "flex", "justify-content": "center" }}>
          <GatsbyImage image={featuredImg} alt="Featured Image" />
        </div>
      </section>
      <div className={styles.details}>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        headline
        tags
        featured {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
