import Square from './Square';
import { useState } from 'react';

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));

  console.log(square);
  const handleSquareClick = clickedPosition => {
    setSquare(currSquare => {
      return currSquare.map((value, position) => {
        if (clickedPosition === position) {
          return 'O';
        } else {
          return value;
        }
      });
    });
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
