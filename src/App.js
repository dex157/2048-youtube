import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import { getInitCells } from 'logic'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitState()
  }

  getInitState() {
    return {
      cells: getInitCells(),
      score: 0,
    }
  }

  startNewGame = () => {
    this.setState(this.getInitState())
  }
  render() {
    const { cells } = this.state
    return (
      <Layout>
        <div>
          <button onClick={this.startNewGame}>New game</button>
        </div>
        <Field cells={cells} />
      </Layout>
    )
  }
}

export default App
