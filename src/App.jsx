import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  const winner = calculateWinner(square);
  const nextPlayer = isXnext ? 'X' : 'O'; // this is derived state there is no need to create new state for it
  const showStatus = winner
    ? `winner is ${winner}`
    : `Next Player is ${nextPlayer}`;

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
      <h2>{showStatus}</h2>
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
