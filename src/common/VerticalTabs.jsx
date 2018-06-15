// @flow
import React, { Component, Node } from 'react'

import styles from './VerticalTabs.styl'

type Props = {|
  children: Array<Node>,
  onSelect: (selected: Node) => void,
|}

type State = {|
  selected: number,
|}

class VerticalTabs extends Component<Props,State> {
  state = {selected: 0}

  select(selected) {
    this.setState({ selected })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          {this.props.children.map((n,i) =>
            <div
              key={n.props.title}
              className={`${styles.tab} ${i === this.state.selected ? styles.selected : ''}`}
              onMouseEnter={() => this.select(i)}
              onClick={() => this.props.onSelect(n)}
            >
              {n.props.title}
            </div>
          )}
        </div>
        <div className={styles.details}>
          {this.props.children[this.state.selected]}
        </div>
      </div>
    )
  }
}

export default VerticalTabs
