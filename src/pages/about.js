import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function About() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <img src="./pic.png" />
        </div>
        <section>
          <p>
            Mi nombre es Marcelo de León, bienvenido a mi portafolio de Machine
            Learning. En éste espacio estaré compartiendo artículos y proyectos sobre
            varios temas relacionados a Machine Learning. Encontrarás información sobre
            preparación de datasets, feature Engineering, modelado y evaluación de
            algoritmos de Machine Learning y mucho más.
          </p>

          <p>
            Para buscar sobre una habilidad en particular, la sección Tags te permitirá
            filtrar los posts dependiendo de lo que sea de interés.
          </p>

          <p>
            Buena lectura!
          </p>
        </section>
      </section>
    </Layout>
  )
}
