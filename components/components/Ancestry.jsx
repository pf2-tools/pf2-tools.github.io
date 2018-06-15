import React, { Component, Node } from 'react'

import Ancestries from '../data/Ancestries'

import HoverList from '../common/HoverList'

const Item = ({ ancestry }) => (
  <div>{ancestry.name}</div>
)

class Ancestry extends Component {
  state = {placeholder: 'Select Ancestry'}

  select(node: Node) {
    this.setState({ placeholder: node.props.title })
  }

  render() {
    return (
      <HoverList
        placeholder={this.state.placeholder}
        onSelect={(node: Node) => this.select(node)}
      >
        {Ancestries.map(a => <Item key={a.name} title={a.name} ancestry={a}/>)}
      </HoverList>
    )
  }
}

export default Ancestry
