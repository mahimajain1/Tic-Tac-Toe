import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div
    style={{
      borderRadius: "10px",
      width: "250px",
      height: "250px",
      margin: "0 auto",
      display: "grid",
      gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
    }}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>

);

export default Board;
