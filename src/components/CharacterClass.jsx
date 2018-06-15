// @flow
import React, { Component, Node } from 'react'

import Classes from '../data/Classes'

import HoverList from '../common/HoverList'

const Item = ({ data }) => (
  <div>{data.name}</div>
)

class CharacterClass extends Component {
  state = {placeholder: 'Select Class'}

  select(node: Node) {
    this.setState({ placeholder: node.props.title })
  }

  render() {
    return (
      <HoverList
        placeholder={this.state.placeholder}
        onSelect={(node: Node) => this.select(node)}
      >
        {Classes.map(c => <Item key={c.name} title={c.name} data={c}/>)}
      </HoverList>
    )
  }
}

export default CharacterClass
