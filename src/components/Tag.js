import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/home.module.css'
// Utilities
import kebabCase from 'lodash/kebabCase'

const Tag = ({ name }) => (
  <Link className={styles.btn} to={`/tags/${kebabCase(name)}/`}>
    {name}
  </Link>
)

export default Tag
