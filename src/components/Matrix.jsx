import React from "react";
import Row from "./Row";
import { PIECES } from "../pieces";
import { kingMoves, queenMoves, bishopMove } from "../moves";

const initMatrix = () => {
  let matrix = Array(8)
    .fill()
    .map(() =>
      Array(8).fill({
        coordinates: [null, null],
        piece: null,
        isClicked: false,
        movable: false
      })
    );

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      matrix[i][j] = {
        coordinates: [i, j],
        piece: null,
        isClicked: false,
        movable: false
      };
    }
  }

  return matrix;
};

const Matrix = () => {
  const [matrix, setMatrix] = React.useState(initMatrix());

  const [on, setOn] = React.useState(null);

  const hightLight = (pos) => {
    if (on !== null && JSON.stringify(pos) === JSON.stringify(on)) {
      setOn(null);
    } else {
      setOn(pos);
    }
  };

  const cleanHighlights = () => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        matrix[i][j].isClicked = false;
        matrix[i][j].movable = false;
      }
    }
  };

  const highlightSquare = (pos) => {
    cleanHighlights();
    if (pos) {
      const cp = [...matrix];
      cp[pos[0]][pos[1]].isClicked = true;
      let moves = queenMoves(pos);
      for (let i = 0; i < moves.length; i++) {
        let line = moves[i][0];
        let col = moves[i][1];
        cp[line][col].movable = true;
      }
      setMatrix(cp);
    }
  };
  const initBoard = () => {
    let board = [...matrix];

    // Special pieces
    for (let i = 0; i < PIECES.length; i++) {
      let piece = PIECES[i];
      for (let j = 0; j < piece.defaultPos.length; j++) {
        let line = piece.defaultPos[j][0];
        let col = piece.defaultPos[j][1];

        board[line][col]["piece"] = i;
      }
    }

    setMatrix(board);
  };

  React.useEffect(() => {
    initBoard();
  }, []);

  React.useEffect(() => {
    highlightSquare(on);
  }, [on]);

  return (
    <div style={{ width: 400 }}>
      {matrix.map((m, i) => (
        <Row hightLight={hightLight} key={i.toString()} data={m} />
      ))}
    </div>
  );
};

export default Matrix;
