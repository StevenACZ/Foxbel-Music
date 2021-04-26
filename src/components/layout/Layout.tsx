// React
import React from 'react';

// Styles
import { LayoutStyled, Section } from './Styles';

// Components
import Header from '../layout/header/Header';
import Aside from '../layout/aside/Aside';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Aside />
      <Section>{children}</Section>
      {/* <MusicPlayer /> */}
    </LayoutStyled>
  );
};

export default Layout;
