const History = ({ history, moveTo, currMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
              style={{ fontWeight: currMove === index ? 'bold' : 'normal' }}
            >
              {index === 0 ? 'Go to game start' : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
