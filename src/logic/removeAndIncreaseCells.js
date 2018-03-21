import {cellStates} from './cellManager'
function removeAndIncreaseCells (cells) {
  return cells.filter(cell => cell.state !== cellStates.DYING).map(cell => {
    if (cell.state === cellStates.INCREASE) {
      cell.value *= 2
    }

    cell.state = cellStates.IDLE

    return cell
  })
}

export {removeAndIncreaseCells}
