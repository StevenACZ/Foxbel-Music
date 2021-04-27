// React
import React from 'react';

// Styles
import { LayoutStyled } from './Styles';

// Components
import Header from '../layout/header/Header';
import Aside from '../layout/aside/Aside';
import MusicPlayer from '../music-player/MusicPlayer';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Aside />
      <>{children}</>
      <MusicPlayer />
    </LayoutStyled>
  );
};

export default Layout;
