import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import React, { useState } from "react";
import Winning from "./components/Winning.jsx";
import Winner from "./components/Winner.jsx";
const gb = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let gameboard = [...gb.map((row) => [...row])];
  let winner;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

  Winning.forEach((curr, i) => {
    let first = gameboard[curr[0].row][curr[0].col];
    let second = gameboard[curr[1].row][curr[1].col];
    let third = gameboard[curr[2].row][curr[2].col];

    if (first === second && first === third && first !== null) {
      winner = first;
    }
  });
  let draw = gameTurns.length === 9 && !winner;

  const handleRestart = () => {
    setGameTurns([]);
  };
  const onSelectSquare = (i, j) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = "O";
      if (prevTurns.length > 0 && prevTurns[0].player === "O")
        currentPlayer = "X";

      const updatedTurn = [
        { square: { row: i, col: j }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurn;
    });
  };
  return (
    <>
      <div className={`container ${winner && "first"}`}>
        <div className={` ${winner && "temp"}`}>
          <div className="players">
            <Player name="player1" symbol="O" gameTurns={gameTurns} />
            <Player name="player2" symbol="X" gameTurns={gameTurns} />
          </div>
          <Gameboard gameboard={gameboard} onSelectSquare={onSelectSquare} />
        </div>

        {(winner || draw) && (
          <Winner symbol={winner} handleRestart={handleRestart} />
        )}
      </div>

      <Log gameTurns={gameTurns} />
    </>
  );
}

export default App;
