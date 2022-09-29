import React, { useState } from "react";
import Board from "./Components/Board";
import History from "./Components/History";
import StatusMessage from "./Components/StatusMessage";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const handlesquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "x" : "0";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handlesquareClick={handlesquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
