import React from 'react'

import Ancestry from '../components/Ancestry'
import Background from '../components/Background'
import CharacterClass from '../components/CharacterClass'

import styles from './Builder.styl'

const Builder = () => (
  <div className={styles.info}>
    <Ancestry/>
    <Background/>
    <CharacterClass/>
    <ul>
      <li>Assign Skill Proficiencies</li>
      <li>Select Ancestry Feat</li>
      <li>Buy Gear</li>
      <li>Select Class Options</li>
    </ul>
  </div>
)

export default Builder
