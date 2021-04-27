// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Slices
import {
  selectSongListSongs,
  selectSongListLoading,
  selectSongListError,
  songListReset,
} from '../../slices/song/songList';

// Styles
import { MusicListStyled, MusicListContent } from './Styles';

// Components
import MusicListItem from './music-list-item/MusicListItem';

interface Props {}

const MusicList: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const songs = useSelector(selectSongListSongs);
  const loading = useSelector(selectSongListLoading);
  const error = useSelector(selectSongListError);

  useEffect(() => {
    return () => {
      dispatch(songListReset());
    };
  }, [dispatch]);

  return (
    <MusicListStyled>
      <h2>Resultados</h2>

      <MusicListContent>
        {songs &&
          songs.map((song: any) => <MusicListItem key={song.id} {...song} />)}

        {/* {error && <Alert message={error} type="error" />} */}
      </MusicListContent>
    </MusicListStyled>
  );
};

export default MusicList;
