import React from "react"
import Layout from "../components/Layout"
import Tag from "../components/Tag"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data, pageContext }) => {
  const { html } = data.markdownRemark
  const { title, headline, featured, tags } = data.markdownRemark.frontmatter
  const { next, prev } = pageContext

  const featuredImg = getImage(featured)

  return (
    <Layout>
      <section className={styles.featured}>
        <h1>{title}</h1>
        <p className={styles.subheading}>{headline}</p>
        <div style={{ "marginBottom": "3em", "textAlign": "center" }}>
          {tags.map(tag => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
        <div style={{ display: "flex", "justifyContent": "center" }}>
          <GatsbyImage image={featuredImg} alt="Featured Image" />
        </div>
      </section>
      <div className={styles.details}>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <section className={styles.featured}>
        <div style={{ "marginBottom": "3em", "textAlign": "center" }}>
          {tags.map(tag => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
        <div className={styles.walker}>
          {prev && (
            <div>
              <Link to={`/projects/${prev.frontmatter.slug}`}>
                <div style={{ display: "flex" }}>
                  <img
                    className={styles.icon}
                    src={`../../icons/left-arrow.png`}
                    alt="Left Arrow icon"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "0.5em",
                    }}
                  >
                    <h2>Anterior:</h2> {prev.frontmatter.title}
                  </div>
                </div>
              </Link>
            </div>
          )}
          {next && (
            <div>
              <Link to={`/projects/${next.frontmatter.slug}`}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "0.5em",
                    }}
                  >
                    <h2 style={{ alignSelf: "end" }}>Siguiente:</h2>{" "}
                    {next.frontmatter.title}
                  </div>
                  <img
                    className={styles.icon}
                    src={`../../icons/right-arrow.png`}
                    alt="Left Arrow icon"
                  />
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>
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
