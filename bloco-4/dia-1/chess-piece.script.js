let king =
  'The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally; however, it cannot move to a square that is under attack by an opponent.';
let queen =
  'The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.';
let bishop =
  'The bishop moves any number of vacant squares diagonally in a straight line.';
let knight =
  'The knight moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.';
let rook =
  'The rook moves any number of vacant squares forwards, backwards, left, or right in a straight line.';
let pawn =
  'The pawn moves forward exactly one square, or two squares when on its starting square. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece.';

let chosenPiece = 'Queen';
let chosenPieceLowerCase = chosenPiece.toLowerCase();

function handleChessPieces(piece) {
  if (piece === 'king') {
    return king;
  } else if (piece === 'queen') {
    return queen;
  } else if (piece === 'bishop') {
    return bishop;
  } else if (piece === 'knight') {
    return knight;
  } else if (piece === 'rook') {
    return rook;
  } else if (piece === 'pawn') {
    return pawn;
  } else {
    return 'Error!';
  }
}

console.log(handleChessPieces(chosenPieceLowerCase));
