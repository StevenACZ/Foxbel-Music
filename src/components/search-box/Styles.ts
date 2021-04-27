import styled from 'styled-components';
import { color } from '../../theme/variables';

export const SearchBoxStyled = styled.form`
  display: flex;
  position: relative;
  width: 59%;
  border-radius: 100px;
  height: 36px;

  & > input {
    border: 1px solid ${color.colorGray};
    outline: none;
    width: 100%;
    border-radius: 100px;
    padding-left: 16px;

    ::placeholder {
      color: ${color.colorSoftGray};
      font-size: 18px;
      line-height: 22.5px;
      font-weight: 400;
    }
  }

  & > button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    background-color: transparent;
    border: none;

    & > .anticon-search {
      color: ${color.colorSoftGray};
      font-size: 18px;
    }
  }
`;
