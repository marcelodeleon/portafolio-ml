import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portafolio</h2>
        <h3>Proyectos y articulos de Machine Learning</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumbnail)} alt="Thumbnail" />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.headline }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
 
export default Projects

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          headline
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }
        }
        id
      }
    }
  }
`
