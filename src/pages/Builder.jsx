// @flow
import React from 'react'

import { classes } from '../util'

import Ancestry from '../components/Ancestry'
import Background from '../components/Background'
import CharacterClass from '../components/CharacterClass'

import styles from './Builder.styl'

const Builder = () => (
  <div className={styles.info}>
    <div className={styles.basic}>
      <span className={classes(styles.block, styles.ancestry)}><Ancestry/></span>
      <span className={classes(styles.block, styles.bg)}><Background/></span>
      <span className={classes(styles.block, styles.charClass)}><CharacterClass/></span>
    </div>
    <ul>
      <li>Assign Skill Proficiencies</li>
      <li>Select Ancestry Feat</li>
      <li>Buy Gear</li>
      <li>Select Class Options</li>
    </ul>
  </div>
)

export default Builder
