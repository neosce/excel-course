/**
 * Codes char symbol for Excel row table
 * @type {{A: number, Z: number}}
 */
const CODES = {
  A: 65,
  Z: 90
}

/**
 * Create cell in excel table
 * @return {string}
 */
function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

/**
 * Create columns in excel table
 * @return {string}
 * @param {string} col
 */
function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

/**
 * Create row in excel table
 * @return {string}
 * @param {Number} index
 * @param {string} content
 */
function createRow(index, content) {
  return `
    <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

/**
 * Return char code alphabet
 * @return {string}
 * @param {number} _
 * @param {number} index
 */
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

/**
 * Create table this template
 * @return {string}
 * @param {Number} rowsCount
 */
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(null, cols))

  for (let i=0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
