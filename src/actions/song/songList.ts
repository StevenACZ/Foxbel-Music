// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  songListRequest,
  songListSuccess,
  songListFail,
} from '../../slices/song/songList';

export const listSongs = (keyword = '') => async (dispatch: any) => {
  try {
    dispatch(songListRequest());

    const { data } = await axios.get(`/search?q=album:"${keyword}"`);

    dispatch(songListSuccess(data));
  } catch (error) {
    dispatch(
      songListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
