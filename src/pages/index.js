import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Analiza</h2>
          <h3>Modela & Evalúa</h3>
          <p>Portafolio de Machine Learning.</p>
          <Link className={styles.btn} to="/projects">
            Ver Proyectos de ML
          </Link>
        </div>
        <section>
          <Link to={"/projects/house-pricing/"}>
            <div className={styles.promote}>
              <img
                className={styles.icon}
                src={`./icons/bill.png`}
                alt="Bill icon"
              />
              <p>
                Proyecto Principal: Estimación de precios de casas en Ames,
                Iowa; utilizando algoritmos de regresión.
              </p>
            </div>
          </Link>
          <Link to={"/tags/caso-de-estudio/"}>
            <div className={styles.promote}>
              <img
                className={styles.icon}
                src={`./icons/private-detective.png`}
                alt="Data icon"
              />
              <p>
                Casos de estudio: Análisis de atributos, entendimiento del
                contexto, aplicaciones reales.
              </p>
            </div>
          </Link>
          <Link to={"/tags/preparacion-del-dataset/"}>
            <div className={styles.promote}>
              <img
                className={styles.icon}
                src={`./icons/dashboard.png`}
                alt="Dashboard icon"
              />
              <p>
                Preparación de datos: Detección de Outliers, normalización y
                tratamiento de datos faltantes.
              </p>
            </div>
          </Link>
          <Link to={"/tags/modelado/"}>
            <div className={styles.promote}>
              <img
                className={styles.icon}
                src={`./icons/model.png`}
                alt="Model icon"
              />
              <p>Información e implementación sobre difrentes modelos de ML</p>
            </div>
          </Link>
          <Link to={"/tags/feature-engineering/"}>
            <div className={styles.promote}>
              <img
                className={styles.icon}
                src={`./icons/feature-selection.png`}
                alt="Feature selection icon"
              />
              <p>
                Ferature Engineering: Algoritmos y estrategias de selección de
                atributos.
              </p>
            </div>
          </Link>
        </section>
      </section>
    </Layout>
  )
}
