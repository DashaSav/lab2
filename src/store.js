import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './redux/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
