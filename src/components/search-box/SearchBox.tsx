// React
import React from 'react';

// Styles
import { SearchBoxStyled } from './Styles';

// Antd Icons
import { SearchOutlined } from '@ant-design/icons';

// Custom Hooks
import useForm from '../../hooks/useForm';

interface Props {}

const SearchBox: React.FC<Props> = () => {
  const { keyword, onChange } = useForm({
    keyword: '',
  });

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
        value={keyword}
        onChange={({ target }) => {
          onChange(target.value, 'keyword');
        }}
      />
      <button>
        <SearchOutlined />
      </button>
    </SearchBoxStyled>
  );
};

export default SearchBox;
