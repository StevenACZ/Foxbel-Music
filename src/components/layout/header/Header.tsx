// React
import React from 'react';

// Styles
import { HeaderStyled, Search, User } from './Styles';

// Ant Icons
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <Search>
        <input type="text" placeholder="Buscar" />
        <SearchOutlined />
      </Search>
      <User>
        <UserOutlined />
        <span>Francisco M.</span>
      </User>
    </HeaderStyled>
  );
};

export default Header;
