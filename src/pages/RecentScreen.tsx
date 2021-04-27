// React
import React from 'react';

// Styles
import { RecentScreenStyled } from './Styles';

// Components
import MainMusic from '../components/main-music/MainMusic';
import MusicList from '../components/music-list/MusicList';

interface Props {}

const RecentScreen: React.FC<Props> = () => {
  return (
    <RecentScreenStyled>
      <MainMusic />
      <MusicList />
    </RecentScreenStyled>
  );
};

export default RecentScreen;
