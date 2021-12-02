import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Lo sentimos</h2>
          <h3>Pagina no encontrada</h3>
        </div>
        <section>
          <img
            style={{ width: "50em" }}
            src={`./404.png`}
            alt="Not Found"
          />
        </section>
      </section>
    </Layout>
  )
}
