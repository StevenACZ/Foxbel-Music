// React
import React from 'react';

// Styles
import {
  AsideStyled,
  Logo,
  Navigation,
  List,
  OptionList,
  OptionListItem,
} from './Styles';

// Images
import logo from '../../../assets/images/logo-foxbel-music.png';

interface Props {}

const Aside: React.FC<Props> = () => {
  return (
    <AsideStyled>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Navigation>
        <List>
          <h3>Mi Librería</h3>
          <OptionList>
            <OptionListItem className="active">Recientes</OptionListItem>
            <OptionListItem>Artistas</OptionListItem>
            <OptionListItem>Álbums</OptionListItem>
            <OptionListItem>Canciones</OptionListItem>
            <OptionListItem>Estaciones</OptionListItem>
          </OptionList>
        </List>

        <List>
          <h3>Playlist</h3>
          <OptionList>
            <OptionListItem>Metal</OptionListItem>
            <OptionListItem>Para bailar</OptionListItem>
            <OptionListItem>Rock 90s</OptionListItem>
            <OptionListItem>Baladas</OptionListItem>
          </OptionList>
        </List>
      </Navigation>
    </AsideStyled>
  );
};

export default Aside;
