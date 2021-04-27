// React
import React from 'react';

// Styles
import {
  MusicListItemStyled,
  Image,
  IconPlay,
  IconThreeVertical,
  Information,
} from './Styles';

// Images
import iconPlay from '../../../assets/images/icon-play.png';
import example from '../../../assets/images/adele21.png';
import iconThreeVertical from '../../../assets/images/icon-three-vertical.png';

interface Props {}

const MusicListItem: React.FC<Props> = () => {
  return (
    <MusicListItemStyled>
      <Image>
        <img src={example} alt="example" />
        <IconPlay src={iconPlay} alt="icon play" />
        <IconThreeVertical src={iconThreeVertical} alt="icon three vertical" />
      </Image>
      <Information>
        <h3>21</h3>
        <p>Adele</p>
      </Information>
    </MusicListItemStyled>
  );
};

export default MusicListItem;
