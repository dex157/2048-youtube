import { create } from './cellManager'

export default existCells => {
  const startCellCount = 1

  const occupiedPositions = new Set()

  existCells.forEach(cell => {
    occupiedPositions.add(cell.x * 4 + cell.y)
  })

  const cells = Array.from(
    new Array(Math.min(startCellCount, 16 - occupiedPositions.size)),
    (_, i) => i,
  ).map(() => {
    const { x, y } = getFreePosition(occupiedPositions)
    const value = 2
    const cell = create(x, y, value)

    return cell
  })
  return cells
}

const getFreePosition = occupiedPositions => {
  const startSize = occupiedPositions.size
  let x
  let y

  do {
    x = Math.floor(Math.random() * 3.9)
    y = Math.floor(Math.random() * 3.9)
    occupiedPositions.add(x * 4 + y)
  } while (startSize === occupiedPositions.size)

  return { x, y }
}
