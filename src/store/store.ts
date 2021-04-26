// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
// import { ...Slice } from '../slices/';

const store = configureStore({
  reducer: {
    // musicList: musicListSlice.reduce
    // musicDetails: musicDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
