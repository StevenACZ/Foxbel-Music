// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { listSongs } from '../../actions/song/songList';

// Styles
import { SearchBoxStyled } from './Styles';

// Antd Icons
import { SearchOutlined } from '@ant-design/icons';

// Custom Hooks
import useForm from '../../hooks/useForm';

interface Props {}

const SearchBox: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  const { keyword, onChange } = useForm({
    keyword: '',
  });

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (keyword.trim()) {
      dispatch(listSongs(keyword));
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
