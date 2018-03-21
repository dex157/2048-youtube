import { create, cellStates } from '../cellManager'
import { moveCells, directions } from '../moveCells'

const finalPositions = {
  [directions.UP]: {
    x: 1,
    y: 0,
    value: 2,
    id: 'test',
    state: cellStates.MOVING,
  },
  [directions.DOWN]: {
    x: 1,
    y: 3,
    value: 2,
    id: 'test',
    state: cellStates.MOVING,
  },
  [directions.LEFT]: {
    x: 0,
    y: 1,
    value: 2,
    id: 'test',
    state: cellStates.MOVING,
  },
  [directions.RIGHT]: {
    x: 3,
    y: 1,
    value: 2,
    id: 'test',
    state: cellStates.MOVING,
  },
}

Object.keys(directions).forEach(direction => {
  describe(`moving ${direction}`, () => {
    it('move on 3 steps', () => {
      const initCells = [create(1, 1, 2, 'test')]

      expect(moveCells(initCells, direction)).toEqual([
        finalPositions[direction],
      ])
    })
  })
})

describe('INCREASING', () => {
  it('2 cells', () => {
    const initCells = [create(0, 0, 2, 't1'), create(1, 0, 2, 't2')]
    expect(moveCells(initCells, directions.LEFT)).toEqual([
      {
        x: 0,
        y: 0,
        value: 2,
        id: 't1',
        state: cellStates.DYING,
      },
      {
        x: 0,
        y: 0,
        value: 2,
        id: 't2',
        state: cellStates.INCREASE,
      },
    ])
  })
})
