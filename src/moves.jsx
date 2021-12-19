const validator = (moves) => {
  let mv = moves.filter((item) => (item[0] < 8 && item[0] > -1) && (item[1] < 8 && item[1] > -1) )
  
  return mv

}

export const kingMoves = (pos) => {
  let moves = []
  let line = pos[0]
  let col = pos[1]
  for (let i = line - 1; i <= line + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (JSON.stringify([i, j]) !== JSON.stringify([line, col])) {
        moves.push([i, j]);
      }
    }
  }
  return validator(moves);
}

export const queenMoves = (pos) => {
  let moves = []
  let line = pos[0]
  let col = pos[1]
  // for (let i = line - 7; i <= line + 7; i++) {
  //   for (let j = col - 7; j <= col + 7; j++) {
  //     if (JSON.stringify([i, j]) !== JSON.stringify([line, col])) {
  //       moves.push([i, j]);
  //     }
  //   }
  // }
  for (let i = line - 7; i <= line + 7; i++) {
    if (JSON.stringify([i, i]) !== JSON.stringify([line, col])) {
      moves.push([line+i, col+i]);
    }
  }

  // for (let i = line - 7; i <= line + 7; i++) {
  //   if (JSON.stringify([i, i]) !== JSON.stringify([line, col])) {
  //     moves.push([i-1, i+1]);
  //   }
  // }

  return validator(moves);
}







