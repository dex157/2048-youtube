import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import Button from 'UI/Button'
import Score from 'UI/Score'
import { getInitCells, direction, moveCells } from 'logic'

const gameStates = {
  IDLE: 'IDLE',
  PROCESSING: 'PROCESSING',
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitState()
  }

  mapKeyCodesToDirections = {
    KeyA: direction.LEFT,
    KeyS: direction.DOWN,
    KeyD: direction.RIGHT,
    KeyW: direction.UP,
  }

  getInitState = () => ({
    cells: getInitCells(),
    gameState: gameStates.IDLE,
    moveDirection: null,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gameState !== this.state.gameState && this.state.gameState === gameStates.PROCESSING) {
      this.processGame()
    }
  }

  async processGame() {
    console.log('processGame')
    const { cells, moveDirection } = this.state
    const newCells = moveCells(cells, moveDirection)
    this.setState(state => ({ ...state, cells: newCells }))
    await delay(100)
    this.setState(state => ({
      ...state,
      gameState: gameStates.IDLE,
      moveDirection: null,
    }))
  }

  handleKeyPress = event => {
    if (['KeyA', 'KeyS', 'KeyD', 'KeyW'].includes(event.code)) {
      this.setState(state => {
        if (state.gameState === gameStates.IDLE) {
          return {
            ...state,
            gameState: gameStates.PROCESSING,
            moveDirection: this.mapKeyCodesToDirections[event.code],
          }
        }
        return undefined
      })
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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default App
