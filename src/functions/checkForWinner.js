/**
 * checkForWinner.js
 *
 * @author Gabriel Sessions - JumboCode Fall 2024
 * @description Contains the checkForWinner function used to check
 * if a player has won Tic-Tac-Toe in TicTacToe.jsx
 */

/**
 * checkForWinner
 * @todo Complete the rest of this function!
 *
 * @description Given a Tic-Tac-Toe game board, this function determines if
 * there is a winner.
 * @param {Array<Array<string|null>>} board - A 2D array of strings or null
 * values that represent moves on a Tic-Tac-Toe board.
 * @returns {string|null} - "X" if X is a winner, "O" if O is a winner, null
 * if there is no winner
 * @assumption X and O cannot both be winners (ignore invalid cases)
 *
 * @note This is **NOT** a React component, just a normal JS function
 * @note The `export` and `default` keywords are used to make this function
 * accessible in TicTacToe.jsx
 */
export default function checkForWinner(board, k) {
  // Check if the board is valid, exit early if it's not
  if (!board) {
    console.error("checkForWinner was not given a valid Tic-Tac-Toe board");
    return null;
  }

  // Checking if a player has any horizontal wins
  for (let row = 0; row < board.length; row++) {
    let firstCell = board[row][0];

    // Skip rows with empty first spaces
    if (firstCell === null) {
      continue;
    }

    let sum = 0;
    for (let column = 1; column < board[row].length; column++) {
      if (board[row][column] !== firstCell) {
        sum = 0;
        firstCell = board[row][column];
      } else {
        sum += 1;
      }
    }

    if (sum >= k) {
      return firstCell; // return player found in winning row
    }
  }

  // Checking if a player has any vertical wins
  for (let column = 0; column < board[0].length; column++) {
    let firstCell = board[0][column];

    // Skip rows with empty first spaces
    if (firstCell === null) {
      continue;
    }

    let sum = 0;
    for (let row = 1; row < board.length; row++) {
      if (board[row][column] !== firstCell) {
        sum = 0;
        firstCell = board[row][column];
      } else {
        sum += 1;
      }
    }

    if (sum >= k) {
      return firstCell; // return player found in winning row
    }
  }

  // Checking if a player has any diagonal wins from the top
  for (let column = 0; column < board[0].length; column++) {
    // Go forward
    let sum = 0;
    for (let idx = 0; idx < board.length; idx++) {
      if (column + idx >= board[0].length || idx >= board.length) { break; }
      if ()
    }
  }

  // Return null if no winners
  return null;
}
