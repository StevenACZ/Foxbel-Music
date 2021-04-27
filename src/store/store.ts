// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { songListSlice } from '../slices/song/songList';

const store = configureStore({
  reducer: {
    songList: songListSlice.reducer,
    // songDetails: songDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
