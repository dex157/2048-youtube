export function printMatrix(matrix) {
  let printString = '[\n'

  Array.from(new Array(4), (x, i) => i).forEach(colNum => {
    printString += '  '
    printString += Array.from(new Array(4), (x, i) => i)
      .map(rowNum =>
        JSON.stringify(matrix[colNum][rowNum], null).padStart(52, ' '),
      )
      .join(', ')
    printString += '\n'
  })

  printString += ']'
  console.log(printString)
}
