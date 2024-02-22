import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMsg from './components/StatusMsg';
import History from './components/History';

function App() {
  const [history, setHistory] = useState([
    { square: Array(9).fill(null), isXnext: false },
  ]);

  const [currMove, setCurrMove] = useState(0);

  const gamingBoard = history[currMove];
  const winner = calculateWinner(gamingBoard.square);

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.square[clickedPosition] || winner) return;

    setHistory(currHistory => {
      const isTraversing = currMove + 1 !== currHistory.length;

      const lastGamingState = isTraversing
        ? currHistory[currMove]
        : currHistory[currHistory.length - 1];

      const nextSquareState = lastGamingState.square.map((value, position) => {
        if (clickedPosition === position) {
          return lastGamingState.isXnext ? 'X' : 'O';
        } else {
          return value;
        }
      });

      const base = isTraversing
        ? currHistory.slice(0, currHistory.indexOf(lastGamingState) + 1)
        : currHistory;

      return base.concat({
        square: nextSquareState,
        isXnext: !lastGamingState.isXnext,
      });
    });

    setCurrMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };

  return (
    <div className="app">
      <StatusMsg winner={winner} gamingBoard={gamingBoard} />
      <Board
        square={gamingBoard.square}
        handleSquareClick={handleSquareClick}
      />
      <h2>Current Gaming History</h2>
      <History history={history} moveTo={moveTo} currMove={currMove} />
    </div>
  );
}

export default App;
