// React
import React from 'react';

// Styles
import { LayoutStyled, Content } from './Styles';

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
      <Content>{children}</Content>
      <MusicPlayer />
    </LayoutStyled>
  );
};

export default Layout;
