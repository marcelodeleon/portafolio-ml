import React from 'react'
import Navbar from './Navbar'

import '../styles/global.css'
import 'katex/dist/katex.min.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Trabajo realizado por Marcelo de Leon</p>
      </footer>
    </div>
  )
}
