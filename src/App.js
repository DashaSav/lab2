import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeMove, resetGame, selectGame } from './redux/gameSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { board, currentPlayer, winner } = useSelector(selectGame);

  const handleSquareClick = (index) => {
    if (!winner) {
      dispatch(makeMove({ index }));
    }
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleSquareClick(index)}>
      {board[index]}
    </button>
  );

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square)) {
      return 'It\'s a draw!';
    } else {
      return `Next player: ${currentPlayer}`;
    }
  };

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{getStatus()}</div>
        <div className="board-row">
          {Array(3)
            .fill(null)
            .map((_, row) => (
              <div key={row} className="board-row">
                {Array(3)
                  .fill(null)
                  .map((_, col) => renderSquare(row * 3 + col))}
              </div>
            ))}
        </div>
      </div>
      <div className="game-info">
        <button onClick={() => dispatch(resetGame())}>Reset Game</button>
      </div>
    </div>
  );
};

export default App;
