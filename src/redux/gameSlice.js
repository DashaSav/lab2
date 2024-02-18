import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
  },
  reducers: {
    makeMove: (state, action) => {
      const { index } = action.payload;
      if (state.board[index] || state.winner) {
        return;
      }
      state.board[index] = state.currentPlayer;
      state.winner = calculateWinner(state.board);
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.currentPlayer = 'X';
      state.winner = null;
    },
  },
});

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export const { makeMove, resetGame } = gameSlice.actions;
export const selectGame = (state) => state.game;

export default gameSlice.reducer;
