const StatusMsg = ({ winner, gamingBoard }) => {
  const { square, isXnext } = gamingBoard;

  const noMovesLeft = square.every(squareValue => squareValue != null);

  const nextPlayer = isXnext ? 'X' : 'O'; // this is derived state there is no need to create new state for it

  const msgPlayer = (
    <>
      Next Player is{' '}
      <span className={isXnext ? 'text-green' : 'text-orange'}>
        {nextPlayer}
      </span>
    </>
  );

  const msgWinner = (
    <>
      Winner is{' '}
      <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
        {winner}
      </span>
    </>
  );

  const showStatus = winner ? msgWinner : msgPlayer;

  const msgTied = (
    <>
      <span className="text-green">X</span> and{' '}
      <span className="text-orange">O</span> tied !!
    </>
  );

  return (
    <h2 className="status-message">{noMovesLeft ? msgTied : showStatus}</h2>
  );
};

export default StatusMsg;
