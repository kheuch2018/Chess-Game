const validator = (moves) => {
  let mv = moves.filter(
    (item) => item[0] < 8 && item[0] > -1 && item[1] < 8 && item[1] > -1
  );

  return mv;
};

export const kingMoves = (pos) => {
  let moves = [];
  let line = pos[0];
  let col = pos[1];
  for (let i = line - 1; i <= line + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (JSON.stringify([i, j]) !== JSON.stringify([line, col])) {
        moves.push([i, j]);
      }
    }
  }
  return validator(moves);
};

export const bishopMoves = (pos) => {
  let moves = [];
  let line = pos[0];
  let col = pos[1];

  //Diagonale droite
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line - i, col - i]);
  }

  //Diagonale gauche
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line - i, col + i]);
  }

  return validator(moves);
};

export const queenMoves = (pos) => {
  let moves = [];
  let line = pos[0];
  let col = pos[1];

  //Diagonale droite
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line - i, col - i]);
  }

  //Diagonale gauche
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line - i, col + i]);
  }

  // Colonne
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line - i, col]);
  }

  // ligne
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line, col - i]);
  }

  return validator(moves);
};

export const knightMoves = (pos) => {
  let moves = [];
  let line = pos[0];
  let col = pos[1];
  for (let i = -2; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (Math.abs(i) === 2) {
        moves.push([line + i, col - 1]);
        moves.push([line + i, col + 1]);
      }

      if (Math.abs(i) === 1) {
        moves.push([line + i, col - 2]);
        moves.push([line + i, col + 2]);
      }
    }
  }

  return validator(moves);
};

export const rookMoves = (pos) => {
  let moves = [];
  let line = pos[0];
  let col = pos[1];

  // Colonne
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line - i, col]);
  }

  // ligne
  for (let i = line - 7; i <= line + 7; i++) {
    moves.push([line, col - i]);
  }

  return validator(moves);
};

export const pawnMoves = (pos, camp) => {
  let moves = [];
  let line = pos[0];
  let col = pos[1];

  if ((line === 6 && camp === 1) || (line === 1 && camp === 0)) {
    moves.push(line === 6 && camp === 1 ? [line - 1, col] : [line + 1, col]);
    moves.push(line === 6 && camp === 1 ? [line - 2, col] : [line + 2, col]);
  } else {
    moves.push(line === 6 && camp === 1 ? [line - 1, col] : [line + 1, col]);
  }

  return moves;
};
