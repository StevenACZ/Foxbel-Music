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

// Interfaces
import { ReqResSong } from '../../interfaces/reqResSong.interfaces';

// Components
import MusicListItem from './music-list-item/MusicListItem';
import Alert from '../alert/Alert';
import Spin from '../spin/Spin';

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
    <>
      {songs && (
        <MusicListStyled>
          <h2>Resultados</h2>

          <MusicListContent>
            {songs &&
              songs.map((song: ReqResSong) => (
                <MusicListItem key={song.id} {...song} />
              ))}
          </MusicListContent>
        </MusicListStyled>
      )}
      {loading && <Spin spinning={loading} />}
      {error && <Alert message={error} type="error" />}
    </>
  );
};

export default MusicList;
