// React
import React from 'react';

// Styles
import { HeaderStyled, User } from './Styles';

// Ant Icons
import { UserOutlined } from '@ant-design/icons';

// Components
import SearchBox from '../../search-box/SearchBox';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <SearchBox />
      <User>
        <UserOutlined />
        <span>Francisco M.</span>
      </User>
    </HeaderStyled>
  );
};

export default Header;
