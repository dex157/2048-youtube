import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import Button from 'UI/Button'
import Score from 'UI/Score'
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
    const { cells, score } = this.state
    return (
      <Layout>
        <ControllPanel>
          <Button onClick={this.startNewGame}>New game</Button>
          <Score>{score}</Score>
        </ControllPanel>
        <Field cells={cells} />
      </Layout>
    )
  }
}

export default App
