import React from "react"
import Navbar from "./Navbar"

import "../styles/global.css"
import "katex/dist/katex.min.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer style={{ display: "flex" }}>
        <p>
          Trabajo realizado por Marcelo de León | Iconos hechos por{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          {", "}
          <a href="https://www.flaticon.com/authors/toempong" title="toempong">
            toempong
          </a>
          {", "}
          <a href="https://www.flaticon.com/authors/srip" title="srip">
            srip
          </a>
          {", "}
          <a
            href="https://www.flaticon.com/authors/flat-icons"
            title="Flat Icons"
          >
            Flat Icons
          </a>
          {" y "}
          <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
            Eucalyp
          </a>{" "}
          obtenidos en{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </footer>
    </div>
  )
}
