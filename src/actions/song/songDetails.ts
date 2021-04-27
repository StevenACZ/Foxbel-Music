// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  songDetailsRequest,
  songDetailsSuccess,
  songDetailsFail,
} from '../../slices/song/songDetails';

export const listSongDetails = (songId: string) => async (dispatch: any) => {
  try {
    dispatch(songDetailsRequest());

    const { data } = await axios.get(`/track/710977162/${songId}`);

    dispatch(songDetailsSuccess(data));
  } catch (error) {
    dispatch(
      songDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
