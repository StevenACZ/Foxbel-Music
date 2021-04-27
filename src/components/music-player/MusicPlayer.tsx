// React
import React from 'react';

// Styles
import {
  MusicPlayerStyled,
  Image,
  Player,
  Infomation,
  Actions,
  Volume,
} from './Styles';

// Ant Icons
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

// Images
import example from '../../assets/images/adele21.png';

interface Props {}

const MusicPlayer: React.FC<Props> = () => {
  return (
    <MusicPlayerStyled>
      <Image>
        <img src={example} alt="example" />
      </Image>
      <Player>
        <Infomation>
          <h3>Canción</h3>
          <p>Artista - Álbum</p>
        </Infomation>

        <Actions>
          <StepBackwardOutlined />
          <PlayCircleOutlined />
          <PauseCircleOutlined />
          <StepForwardOutlined />
        </Actions>

        <Volume>2</Volume>
      </Player>
    </MusicPlayerStyled>
  );
};

export default MusicPlayer;
