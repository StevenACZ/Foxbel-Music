import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const HeaderStyled = styled.header`
  grid-area: header;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
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
