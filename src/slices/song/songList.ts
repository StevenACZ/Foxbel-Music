import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

// Interfaces
import { ReqResSong } from '../../interfaces/reqResSong.interfaces';

interface SongListState {
  songs: null | ReqResSong[];
  loading: boolean;
  error: null | string;
}

const initialState: SongListState = {
  songs: null,
  loading: false,
  error: null,
};

export const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    songListRequest: (state) => {
      state.songs = null;
      state.loading = true;
      state.error = null;
    },
    songListSuccess: (state, action) => {
      state.songs = action.payload;
      state.loading = false;
      state.error = null;
    },
    songListFail: (state, action) => {
      state.songs = null;
      state.loading = false;
      state.error = action.payload;
    },
    songListReset: (state) => {
      state.songs = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  songListRequest,
  songListSuccess,
  songListFail,
  songListReset,
} = songListSlice.actions;

export const selectSongListSongs = (state: RootState) => state.songList.songs;
export const selectSongListLoading = (state: RootState) =>
  state.songList.loading;

export const selectSongListError = (state: RootState) => state.songList.error;

export default songListSlice.reducer;
