import React from 'react'

import { CharacterProvider } from './context/Character'
import Builder from './pages/Builder'

import styles from './App.styl'

export default () => (
  <CharacterProvider>
    <div className={styles.app}>
      <Builder/>
    </div>
  </CharacterProvider>
)
