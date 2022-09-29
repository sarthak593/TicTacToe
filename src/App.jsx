import React, { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? "x" : "0"}`;

  const handlesquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "x" : "0";
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={board} handlesquareClick={handlesquareClick} />
    </div>
  );
};
export default App;
