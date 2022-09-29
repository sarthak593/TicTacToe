import React from "react";

const statusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next player is ${current.isXNext ? "x" : "0"}`}
      {!winner && noMoveLeft && "x and 0 tied"}
    </h2>
  );
};

export default statusMessage;
