import { create } from '../cellManager'
import { moveCells, directions } from '../moveCells'

const finalPositions = {
  [directions.UP]: { x: 1, y: 0, value: 2, id: 'test' },
  [directions.DOWN]: { x: 1, y: 3, value: 2, id: 'test' },
  [directions.LEFT]: { x: 0, y: 1, value: 2, id: 'test' },
  [directions.RIGHT]: { x: 3, y: 1, value: 2, id: 'test' },
}

Object.keys(directions).forEach(direction => {
  describe(`moving ${direction}`, () => {
    it('move on 3 steps', () => {
      const initCells = [create(1, 1, 2, 'test')]

      expect(moveCells(initCells, direction)).toEqual([
        finalPositions[direction]
      ])
    })
  })
})
