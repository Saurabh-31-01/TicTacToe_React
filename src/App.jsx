import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMsg from './components/StatusMsg';

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  const winner = calculateWinner(square);

  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition] || winner) return;

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

  return (
    <div className="app">
      <StatusMsg winner={winner} isXnext={isXnext} square={square} />
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
