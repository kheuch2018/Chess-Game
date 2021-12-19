import bqueen from "./images/bqueen.svg";
import wqueen from "./images/wqueen.svg";

import bking from "./images/bking.svg";
import wking from "./images/wking.svg";

import bbishop from "./images/bbishop.svg";
import wbishop from "./images/wbishop.svg";

import brook from "./images/brook.svg";
import wrook from "./images/wrook.svg";

import bpawn from "./images/bpawn.svg";
import wpawn from "./images/wpawn.svg";

import bknight from "./images/bknight.svg";
import wknight from "./images/wknight.svg";
import {
  bishopMoves,
  kingMoves,
  knightMoves,
  pawnMoves,
  queenMoves,
  rookMoves
} from "./moves";

export const PIECES = [
  {
    nom: "Bishop", //Fou
    short: "B",
    camp: 0,
    img: bbishop,
    defaultPos: [
      [0, 2],
      [0, 5]
    ],
    moves: bishopMoves
  },

  {
    nom: "Queen", //Reine
    short: "Q",
    camp: 0,
    img: bqueen,
    defaultPos: [[0, 3]],
    moves: queenMoves
  },
  {
    nom: "King", //Roi
    short: "K",
    camp: 0,
    img: bking,
    defaultPos: [[0, 4]],
    moves: kingMoves
  },
  {
    nom: "Rook", //Tour
    short: "R",
    camp: 0,
    img: brook,
    defaultPos: [
      [0, 7],
      [0, 0]
    ],
    moves: rookMoves
  },
  {
    nom: "Pawn", //Pion
    short: "R",
    camp: 0,
    img: bpawn,
    defaultPos: [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7]
    ],
    moves: pawnMoves
  },
  {
    nom: "Knight", //Soldat
    short: "N",
    camp: 0,
    img: bknight,
    defaultPos: [
      [0, 1],
      [0, 6]
    ],
    moves: knightMoves
  },
  {
    nom: "Bishop", //Fou
    short: "B",
    camp: 1,
    img: wbishop,
    defaultPos: [
      [7, 2],
      [7, 5]
    ],
    moves: bishopMoves
  },
  {
    nom: "Queen", //Reine
    short: "Q",
    camp: 1,
    img: wqueen,
    defaultPos: [[7, 3]],
    moves: queenMoves
  },
  {
    nom: "King", //Roi
    short: "K",
    camp: 1,
    img: wking,
    defaultPos: [[7, 4]],
    moves: kingMoves
  },
  {
    nom: "Rook", //Tour
    short: "R",
    camp: 1,
    img: wrook,
    defaultPos: [
      [7, 0],
      [7, 7]
    ],
    moves: rookMoves
  },

  {
    nom: "Knight", //Soldat
    short: "N",
    camp: 1,
    img: wknight,
    defaultPos: [
      [7, 1],
      [7, 6]
    ],
    moves: knightMoves
  },

  {
    nom: "Pawn", //Pion
    short: "R",
    camp: 1,
    img: wpawn,
    defaultPos: [
      [6, 0],
      [6, 1],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, 5],
      [6, 6],
      [6, 7]
    ],
    moves: pawnMoves
  }
];
