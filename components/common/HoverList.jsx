// @flow

import React, { Component, Node } from 'react'

import VerticalTabs from './VerticalTabs'

import styles from './HoverList.styl'

type Props = {|
  placeholder: string,
  children: Array<Node>,
  onSelect: (node: Node) => void
|}

class HoverList extends Component<Props> {
  state = {open: false}

  hover(open) {
    this.setState({open})
  }

  select(node: Node) {
    this.hover(false)
    this.props.onSelect(node)
  }

  render () {
    return !this.state.open
      ? (
        <div
          className={styles.placeholder}
          onMouseEnter={() => this.hover(true)}
        >
          {this.props.placeholder}
        </div>
      )
      : (
        <VerticalTabs
          onSelect={(node: Node) => this.select(node)}
        >
          {this.props.children}
        </VerticalTabs>
      )
  }
}

export default HoverList
