import React, { useState } from "react";
export default function Winner({ symbol, handleRestart }) {
  return (
    <>
      <div className="winner">
        {!symbol ? (
          <h2>Its Draw!!</h2>
        ) : (
          <h2>Player with symbol {symbol} Wins!!</h2>
        )}

        <button className="bt" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </>
  );
}
