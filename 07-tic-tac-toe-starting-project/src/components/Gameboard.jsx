import React, { useState } from "react";

export default function Gameboard({ onSelectSquare, gameboard }) {
  return (
    <>
      <div className="gameboard grid grid-col-3">
        {gameboard.map((row, i) =>
          row.map((col, j) => (
            <button
              key={i + j}
              className="shell"
              onClick={() => onSelectSquare(i, j)}
              disabled={col ? true : false}
            >
              {col}
            </button>
          ))
        )}
      </div>
    </>
  );
}
