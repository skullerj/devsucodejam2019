function getPositionValue(x, y, board) {
  try {
    return board[x][y] === 'x' ? 1 : 0;
  } catch (e) {
    return 0;
  }
}

function countMinesArround(board, x, y) {
  let result = 0;
  result += getPositionValue(x - 1, y - 1, board);
  result += getPositionValue(x, y - 1, board);
  result += getPositionValue(x + 1, y - 1, board);
  result += getPositionValue(x - 1, y, board);
  result += getPositionValue(x + 1, y, board);
  result += getPositionValue(x - 1, y + 1, board);
  result += getPositionValue(x, y + 1, board);
  result += getPositionValue(x + 1, y + 1, board);
  return result;
}

function minesweeper(board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] !== 'x') {
        board[x][y] = countMinesArround(board, x, y);
      }
    }
  }
  return board;
}

export default minesweeper;
