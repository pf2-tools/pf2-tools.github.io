// @flow
import React from 'react'

import styles from './Section.styl'

export default ({ heading, children }) => (
  <div className={styles.section}>
    <span className={styles.heading}>{heading}</span>
    {children}
  </div>
)
