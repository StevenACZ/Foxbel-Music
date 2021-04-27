// React
import React, { useState } from 'react';

// Styles
import { SearchBoxStyled } from './Styles';

// Antd Icons
import { SearchOutlined } from '@ant-design/icons';

interface Props {}

const SearchBox: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (keyword.trim()) {
      // history.push(`/search/${keyword}`);
    } else {
      // history.push('/');
    }
  };

  return (
    <SearchBoxStyled onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button>
        <SearchOutlined />
      </button>
    </SearchBoxStyled>
  );
};

export default SearchBox;
