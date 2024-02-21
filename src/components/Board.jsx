import Square from './Square';
import { useState } from 'react';

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition]) return;

    setSquare(currSquare => {
      return currSquare.map((value, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : 'O';
        } else {
          return value;
        }
      });
    });

    setIsXnext(currIsXnext => !currIsXnext);
  };

  const renderSquare = position => {
    return (
      <Square
        value={square[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
