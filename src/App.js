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

  getInitState = () => ({
    cells: getInitCells(),
    score: 0,
  })

  startNewGame = () => {
    this.setState(this.getInitState())
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = event => {
    switch (event.code) {
      case 'keyA':
        break
      case 'keyS':
        break
      case 'keyD':
        break
      case 'keyW':
        break
      default:
        break
    }
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
