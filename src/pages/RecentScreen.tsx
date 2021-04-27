// React
import React from 'react';

// Styles
import { RecentScreenStyled } from './Styles';

// Components
import MainMusic from '../components/main-music/MainMusic';

interface Props {}

const RecentScreen: React.FC<Props> = () => {
  return (
    <RecentScreenStyled>
      <MainMusic />
      {/* <MusicList /> */}
    </RecentScreenStyled>
  );
};

export default RecentScreen;
