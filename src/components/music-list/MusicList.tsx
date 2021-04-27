// React
import React from 'react';

// Styles
import { MusicListStyled, MusicListContent } from './Styles';

// Components
import MusicListItem from './music-list-item/MusicListItem';

interface Props {}

const MusicList: React.FC<Props> = () => {
  return (
    <MusicListStyled>
      <h2>Resultados</h2>

      <MusicListContent>
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
        <MusicListItem />
      </MusicListContent>
    </MusicListStyled>
  );
};

export default MusicList;
