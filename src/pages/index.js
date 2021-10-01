import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout'

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
