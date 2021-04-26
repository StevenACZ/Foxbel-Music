import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const HeaderStyled = styled.header`
  grid-area: header;
  border: 1px solid red;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 991px) {
    padding: 30px 20px;
  }

  @media (max-width: 767px) {
  }
`;

export const Search = styled.label`
  display: flex;
  position: relative;
  width: 55%;
  border-radius: 100px;

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

  & > .anticon-search {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: ${color.colorSoftGray};
    cursor: pointer;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > .anticon-user {
    color: ${color.colorRedPrincipal};
  }

  & > span {
    margin-left: 12px;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
`;
