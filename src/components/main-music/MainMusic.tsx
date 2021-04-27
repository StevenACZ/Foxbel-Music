// React
import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { songDetails } from '../../actions/song/songDetails';

// Redux - Slices
import {
  selectSongListSongs,
  selectSongListLoading,
  selectSongListError,
} from '../../slices/song/songList';

// Styles
import {
  MainMusicStyled,
  Image,
  IconPlay,
  More,
  Information,
  Intro,
  Description,
  Actions,
} from './Styles';

// Images
import iconPlay from '../../assets/images/icon-play.png';

// Interfaces
import { ReqResSong } from '../../interfaces/reqResSong.interfaces';

// Components
import Alert from '../alert/Alert';
import Spin from '../spin/Spin';

interface Props {}

const MainMusic: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const songs = useSelector(selectSongListSongs);
  const loading = useSelector(selectSongListLoading);
  const error = useSelector(selectSongListError);

  const playMusic = (songId: number) => {
    dispatch(songDetails(songId));
  };

  return (
    <>
      {songs &&
        songs
          .slice(0, 1)
          .map(
            ({
              id,
              title_short,
              artist: { name, picture_big },
              album: { cover_xl },
            }: ReqResSong) => (
              <MainMusicStyled key={id}>
                <Image>
                  <img src={cover_xl} alt={title_short} />
                  <IconPlay
                    src={iconPlay}
                    alt="icon play"
                    onClick={() => playMusic(id)}
                  />
                </Image>
                <More image={picture_big}>
                  <Information>
                    <Intro>
                      <h3>{title_short}</h3>
                      <div>
                        <p>Lo mejor de {name}</p>
                        <span>321,123 seguidores</span>
                      </div>
                    </Intro>

                    <Description>
                      <p>
                        Adele Laurie Blue Adkins (Tottenham, Londres,
                        Inglaterra, 5 de mayo de 1988), conocida simplemente
                        como Adele, es una cantante, compositora y
                        multinstrumentista británica.8​
                      </p>
                    </Description>
                  </Information>
                  <Actions>
                    <button className="active">Reproducir</button>
                    <button>Seguir</button>
                  </Actions>
                </More>
              </MainMusicStyled>
            )
          )}
      {loading && <Spin spinning={loading} />}
      {error && <Alert message={error} type="error" />}
    </>
  );
};

export default MainMusic;
