// @flow
import React, { Component, Node } from 'react'

import Backgrounds from '../data/Backgrounds'

import HoverList from '../common/HoverList'

const Item = ({ data: { description } }) => (
  <div>{description}</div>
)

class Background extends Component {
  state = {placeholder: 'Select Background'}

  select(node: Node) {
    this.setState({ placeholder: node.props.title })
  }

  render() {
    return (
      <HoverList
        placeholder={this.state.placeholder}
        onSelect={(node: Node) => this.select(node)}
      >
        {Backgrounds.map(v => <Item key={v.name} title={v.name} data={v}/>)}
      </HoverList>
    )
  }
}

export default Background
