import { create } from './cellManager'

export default () => {
  const startCellCount = 2 + Math.floor(Math.random() * 2)

  const occupiedPositions = new Set()

  const cells = Array.from(new Array(startCellCount), (_, i) => i).map(() => {
    const { x, y } = getFreePosition(occupiedPositions)
    const value = Math.pow(2, 1 + Math.floor(Math.random() * 2))
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
