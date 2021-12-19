import React from "react";
import Row from "./Row";
import { PIECES } from "../pieces";
import {
  kingMoves,
  queenMoves,
  bishopMoves,
  knightMoves,
  rookMoves
} from "../moves";

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

  const [on, setOn] = React.useState({});

  const hightLight = (obj) => {
    if (
      on !== null &&
      JSON.stringify(obj.coordinates) === JSON.stringify(on.coordinates)
    ) {
      setOn({});
    } else {
      setOn(obj);
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

  const highlightSquare = (obj) => {
    cleanHighlights();
    if (obj.coordinates && obj.piece) {
      const cp = [...matrix];
      cp[obj.coordinates[0]][obj.coordinates[1]].isClicked = true;
      let moves = PIECES[obj.piece].moves(
        obj.coordinates,
        PIECES[obj.piece].camp
      );
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
