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
import iconThreeVertical from '../../../assets/images/icon-three-vertical.png';

// Interfaces
import { ReqResSong } from '../../../interfaces/reqResSong.interfaces';

const MusicListItem: React.FC<ReqResSong> = ({
  title_short,
  artist: { name },
  album: { cover_medium },
}) => {
  return (
    <MusicListItemStyled>
      <Image>
        <img src={cover_medium} alt={title_short} />
        <IconPlay src={iconPlay} alt="icon play" />
        <IconThreeVertical src={iconThreeVertical} alt="icon three vertical" />
      </Image>
      <Information>
        <h3>{title_short}</h3>
        <p>{name}</p>
      </Information>
    </MusicListItemStyled>
  );
};

export default MusicListItem;
