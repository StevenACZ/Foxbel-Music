import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

// Interfaces
import { ReqResSong } from '../../interfaces/reqResSong.interfaces';

interface SongDetailsState {
  song: null | ReqResSong;
  loading: boolean;
  error: null | string;
}

const initialState: SongDetailsState = {
  song: null,
  loading: false,
  error: null,
};

export const songDetailsSlice = createSlice({
  name: 'songDetails',
  initialState,
  reducers: {
    songDetailsRequest: (state) => {
      state.song = null;
      state.loading = true;
      state.error = null;
    },
    songDetailsSuccess: (state, action) => {
      state.song = action.payload;
      state.loading = false;
      state.error = null;
    },
    songDetailsFail: (state, action) => {
      state.song = null;
      state.loading = false;
      state.error = action.payload;
    },
    songDetailsReset: (state) => {
      state.song = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  songDetailsRequest,
  songDetailsSuccess,
  songDetailsFail,
  songDetailsReset,
} = songDetailsSlice.actions;

export const selectSongDetailsSong = (state: RootState) =>
  state.songDetails.song;
export const selectSongDetailsLoading = (state: RootState) =>
  state.songDetails.loading;

export const selectSongDetailsError = (state: RootState) =>
  state.songDetails.error;

export default songDetailsSlice.reducer;
