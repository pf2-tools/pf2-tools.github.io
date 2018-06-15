import React from 'react'

export const Defaults = {
  ancestry: undefined,
  background: undefined,
  profession: undefined,
  proficiencies: undefined,
  ancestryFeat: undefined,
  gear: undefined,
  options: undefined,
}

const { Provider, Consumer } = React.createContext(Defaults)

class CharacterProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...Defaults
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export { Consumer as CharacterConsumer }
export { CharacterProvider }
