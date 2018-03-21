import { create } from './cellManager'

function populateField(cells) {
  const occupiedCoords = new Set()

  cells.forEach(cell => {
    occupiedCoords.add(cell.x * 4 + cell.y)
  })

  if (occupiedCoords.size === 16) return

  let x
  let y
  let startSize = occupiedCoords.size
  do {
    x = Math.floor(Math.random() * 3.9)
    y = Math.floor(Math.random() * 3.9)

    const sum = x * 4 + y
    occupiedCoords.add(sum)
  } while (startSize === occupiedCoords.size)

  return [...cells, create(x, y, 2)]
}

export { populateField }
