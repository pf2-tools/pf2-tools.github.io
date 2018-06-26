// @flow
import React from 'react'

import { classes } from '../util'

import Ancestry from '../components/Ancestry'
import Background from '../components/Background'
import CharacterClass from '../components/CharacterClass'

import styles from './Builder.styl'

const Builder = () => (
  <div className={styles.info}>
    <div className={styles.section}>
      <span className={classes(styles.block, styles.ancestry)}><Ancestry/></span>
      <span className={classes(styles.block, styles.bg)}><Background/></span>
      <span className={classes(styles.block, styles.charClass)}><CharacterClass/></span>
    </div>
    <div className={styles.section}>
      <li>Select Ancestry Feat</li>
      <li>Assign Skill Proficiencies</li>
    </div>
    <div className={styles.section}>
      <li>Buy Gear</li>
      <li>Select Class Options</li>
    </div>
  </div>
)

export default Builder
