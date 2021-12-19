import React from "react";
import { BROWN, BEIGE } from "../colors";
import { PIECES } from "../pieces";

const Square = ({ obj = {}, hightLight = () => {} }) => {
  const getColor = () => {
    if (obj.piece !== null && obj.isClicked && PIECES[obj.piece].camp === 1) {
      return "#646F40";
    } else {
      return (obj.coordinates[0] + obj.coordinates[1]) % 2 ? BEIGE : BROWN;
    }
  };

  return (
    <div
      onClick={() => hightLight(obj)}
      style={{
        width: 50,
        height: 50,
        backgroundColor: getColor(),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: "#829769",
          borderRadius: 10,
          display: obj.piece !== null || obj.movable === false ? "none" : ""
        }}
      />
      <img
        src={obj.piece !== null ? PIECES[obj.piece].img : ""}
        style={{ display: !(obj.piece !== null) ? "none" : "" }}
        width="25"
      />
    </div>
  );
};

export default Square;
