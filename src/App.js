import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import Button from 'UI/Button'
import Score from 'UI/Score'
import { moveCells, directions, initCells } from 'logic'

class App extends Component {
  state = this.getNewState()

  mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
  }

  newGame = () => {
    this.setState(this.getNewState())
  }

  getNewState() {
    return {
      cells: initCells(),
      score: 0,
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = event => {
    if (['KeyA', 'KeyS', 'KeyD', 'KeyW'].includes(event.code))
      this.setState(state => ({
        ...state,
        cells: moveCells(state.cells, this.mapKeyCodeToDirection[event.code]),
      }))
  }

  render() {
    const { cells, score } = this.state

    return (
      <Layout>
        <ControllPanel>
          <Button onClick={this.newGame}>New Game</Button>
          <Score>{score}</Score>
        </ControllPanel>
        <Field cells={cells} />
      </Layout>
    )
  }
}

export default App
