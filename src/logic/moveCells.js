import matrixRotate from 'matrix-rotate'
import { cellStates } from './cellManager'
// import {printMatrix} from './helpers'
export const direction = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  UP: 'UP',
}

export const moveCells = (cells, moveDirection) => {
  let startMatrix = Array.from(new Array(4), () =>
    Array.from(new Array(4), () => 0),
  )

  cells.forEach(cell => {
    startMatrix[cell.x][cell.y] = cell
  })
  // printMatrix(startMatrix)
  rotateMatrixToDirection(startMatrix, moveDirection)
  // printMatrix(startMatrix)

  for (let x = 1; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (startMatrix[x][y] === 0) continue
      moveCell(startMatrix, x, y)
    }
  }

  // printMatrix(startMatrix)
  rotateMatrixFromDirection(startMatrix, moveDirection)

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (startMatrix[x][y] === 0) continue
      startMatrix[x][y].x = x
      startMatrix[x][y].y = y
    }
  }

  // printMatrix(startMatrix)
  return cells
}

function moveCell(matrix, x, y) {
  let nextRow = x - 1
  let currentRow = x

  while (nextRow >= 0) {

    if (matrix[nextRow][y] === 0) {
      matrix[currentRow][y].state = cellStates.MOVING
      matrix[nextRow][y] = matrix[currentRow][y]
      matrix[currentRow][y] = 0
      currentRow = nextRow
    } else if (isSameValue(matrix[nextRow][y], matrix[currentRow][y])) {
      if (
        matrix[nextRow][y].state === cellStates.IDLE ||
        matrix[nextRow][y].state === cellStates.MOVING
      ) {
        matrix[nextRow][y].state = cellStates.DYING
        matrix[currentRow][y].state = cellStates.INCREASE
        matrix[nextRow][y] = matrix[currentRow][y]
        matrix[currentRow][y] = 0
      }
    }
    nextRow -= 1
  }
}

const isSameValue = (a, b) => a.value === b.value


function rotateMatrixToDirection(matrix, moveDirection) {
  switch (moveDirection) {
    case direction.LEFT:
      matrixRotate(matrix)
      break
    case direction.UP:
      matrixRotate(matrix)
      matrixRotate(matrix)
      break
    case direction.RIGHT:
      matrixRotate(matrix)
      matrixRotate(matrix)
      matrixRotate(matrix)
      break
    default:
      break
  }
}
function rotateMatrixFromDirection(matrix, moveDirection) {
  switch (moveDirection) {
    case direction.LEFT:
      matrixRotate(matrix)
      matrixRotate(matrix)
      matrixRotate(matrix)
      break
    case direction.UP:
      matrixRotate(matrix)
      matrixRotate(matrix)
      break
    case direction.RIGHT:
      matrixRotate(matrix)
      break
    default:
      break
  }
}
