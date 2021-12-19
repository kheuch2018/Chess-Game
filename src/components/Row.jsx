import React from 'react'
import Square from "./Square"


const Row = ({ data =[], hightLight=() => {}}) => {
  return(
  <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>

      {data.map((d,i) => <Square hightLight={hightLight} key={i.toString()} obj={d} />)}

  </div>
)};


export default Row;