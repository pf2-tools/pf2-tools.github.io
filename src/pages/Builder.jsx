// @flow
import React from 'react'

import { classes } from '../util'

import Section from '../layout/Section'
import Ancestry from '../components/Ancestry'
import Background from '../components/Background'
import CharacterClass from '../components/CharacterClass'

import styles from './Builder.styl'

const BasicInfo = () => (
  <Section heading='Basic Info'>
    <span className={classes(styles.block, styles.ancestry)}><Ancestry/></span>
    <span className={classes(styles.block, styles.bg)}><Background/></span>
    <span className={classes(styles.block, styles.charClass)}><CharacterClass/></span>
  </Section>
)

const Builder = () => (
  <div className={styles.info}>
    <BasicInfo/>
    <Section>
      <div>Select Ancestry Feat</div>
      <div>Assign Skill Proficiencies</div>
    </Section>
    <Section>
      <div>Buy Gear</div>
      <div>Select Class Options</div>
    </Section>
  </div>
)

export default Builder
