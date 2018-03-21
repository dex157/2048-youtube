import { moveCells, direction } from '../moveCells'
import { create, cellStates } from '../cellManager'

it('move left one cell on 1 step', () => {
  const cells = [create(0, 1, 2, 'test')]
  expect(moveCells(cells, direction.LEFT)).toEqual([
    { id: 'test', x: 0, y: 0, state: cellStates.MOVING, value: 2 },
  ])
})

it('move left one cell on 2 steps', () => {
  const cells = [create(0, 2, 2, 'test')]
  expect(moveCells(cells, direction.LEFT)).toEqual([
    { id: 'test', x: 0, y: 0, state: cellStates.MOVING, value: 2 },
  ])
})

it('2 cells: increase 1 cell', () => {
  const cells = [create(0, 0, 2, 'test1'), create(0, 2, 2, 'test2')]
  expect(moveCells(cells, direction.LEFT)).toEqual([
    { id: 'test1', x: 0, y: 0, state: cellStates.DYING, value: 2 },
    { id: 'test2', x: 0, y: 0, state: cellStates.INCREASE, value: 2 },
  ])
})

it('3 cells: 2 moving, 1 increase', () => {
  const cells = [create(0, 0, 2, 'test1'), create(0, 2, 2, 'test2'), create(0, 3, 2, 'test3')]
  expect(moveCells(cells, direction.LEFT)).toEqual([
    { id: 'test1', x: 0, y: 0, state: cellStates.DYING, value: 2 },
    { id: 'test2', x: 0, y: 0, state: cellStates.INCREASE, value: 2 },
    { id: 'test3', x: 0, y: 1, state: cellStates.MOVING, value: 2 },
  ])
})
