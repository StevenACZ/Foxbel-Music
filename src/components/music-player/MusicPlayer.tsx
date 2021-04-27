// React
import React, { useEffect, useRef, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import {
  selectSongDetailsSong,
  selectSongDetailsLoading,
  selectSongDetailsError,
} from '../../slices/song/songDetails';

// Styles
import {
  MusicPlayerStyled,
  Image,
  Player,
  Infomation,
  Actions,
  Volume,
  NULLMusicPlayerStyled,
} from './Styles';

// Ant Icons
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

// Components
import Alert from '../alert/Alert';
import Spin from '../spin/Spin';

interface Props {}

const MusicPlayer: React.FC<Props> = () => {
  // Selector
  const song = useSelector(selectSongDetailsSong);
  const loading = useSelector(selectSongDetailsLoading);
  const error = useSelector(selectSongDetailsError);

  const audioEl = useRef(null) as any;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (song) {
      if (isPlaying) {
        audioEl.current.play();
      } else {
        audioEl.current.pause();
      }
    }
  }, [song, isPlaying]);

  const playMusic = () => {
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {song ? (
        <MusicPlayerStyled>
          <Image>
            <img src={song.album.cover_medium} alt={song.title_short} />
          </Image>
          <Player>
            <Infomation>
              <h3>{song.title_short}</h3>
              <p>
                {song.artist.name} - {song.album.title}
              </p>
            </Infomation>

            <Actions>
              <StepBackwardOutlined />
              {isPlaying ? (
                <PauseCircleOutlined onClick={pauseMusic} />
              ) : (
                <PlayCircleOutlined onClick={playMusic} />
              )}
              <StepForwardOutlined />
            </Actions>

            <Volume>
              <audio src={song.preview} ref={audioEl} controls></audio>
            </Volume>
          </Player>
        </MusicPlayerStyled>
      ) : (
        <NULLMusicPlayerStyled>
          <Alert message="Seleccione una musica..." type="warning" />
        </NULLMusicPlayerStyled>
      )}
      {loading && <Spin spinning={loading} />}
      {error && <Alert message={error} type="error" />}
    </>
  );
};

export default MusicPlayer;
