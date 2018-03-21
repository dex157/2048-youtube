import { cloneDeep } from 'lodash'
import { cellStates } from './cellManager'

export default (initCells, initScore) => {
  const cells = cloneDeep(initCells)

  let score = initScore

  const clearedCells = cells
    .filter(cell => cell.state !== cellStates.DYING)
    .map(cell => {
      if (cell.state === cellStates.INCREASE) {
        cell.state = cellStates.IDLE
        score += cell.value
        cell.value *= 2
      } else if (cell.state === cellStates.MOVING) {
        cell.state = cellStates.IDLE
      }

      return cell
    })

  return {cells: clearedCells, score}
}
