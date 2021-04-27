// React
import React from 'react';

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
import example from '../../assets/images/adele21.png';

interface Props {}

const MainMusic: React.FC<Props> = () => {
  return (
    <MainMusicStyled>
      <Image>
        <img src={example} alt="music" />
        <IconPlay src={iconPlay} alt="icon play" />
      </Image>
      <More>
        <Information>
          <Intro>
            <h3>Adele 21</h3>
            <div>
              <p>Lo mejor de Adela</p>
              <span>321,123 seguidores</span>
            </div>
          </Intro>

          <Description>
            <p>
              Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
              mayo de 1988), conocida simplemente como Adele, es una cantante,
              compositora y multinstrumentista británica.8​
            </p>
          </Description>
        </Information>
        <Actions>
          <button className="active">Reproducir</button>
          <button>Seguir</button>
        </Actions>
      </More>
    </MainMusicStyled>
  );
};

export default MainMusic;
