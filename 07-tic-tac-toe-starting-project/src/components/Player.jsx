import React, { useState } from "react";

export default function Player({ name, symbol, gameTurns }) {
  const [isEditing, setIsEditing] = useState(false);
  const [namee, setNamee] = useState(name);
  let activeplayer = "X";
  if (gameTurns.length) activeplayer = gameTurns[0].player;

  return (
    <>
      <div className={`player ${activeplayer !== symbol && "orange"}`}>
        {!isEditing ? (
          <div className="pname">{namee}</div>
        ) : (
          <input
            type="text"
            onChange={(e) => setNamee(e.target.value)}
            value={namee}
          ></input>
        )}

        <div className="psymbol"> {symbol} </div>
        <button
          className="bt"
          onClick={() => setIsEditing((isEditing) => !isEditing)}
        >
          {isEditing ? "save" : "edit"}
        </button>
      </div>
    </>
  );
}
