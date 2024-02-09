export default function Log({ gameTurns }) {
  return (
    <>
      {gameTurns.map((turn, i) => (
        <div className="log" key={i}>{`Player with Symbol : ${
          turn.player
        }, clicked block no: ${
          (turn.square.row + 1) * (turn.square.col + 1)
        }`}</div>
      ))}
    </>
  );
}
