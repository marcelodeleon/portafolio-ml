import { Link } from "gatsby"
import React from "react"

import MarceIcon from "./MarceIcon"

export default function Navbar() {
  return (
    <nav style={{ display: "flex" }}>
      <MarceIcon pathToStatic="." />
      <div className="links">
        <Link to="/">Principal</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/about">Sobre mi</Link>
      </div>
    </nav>
  )
}
