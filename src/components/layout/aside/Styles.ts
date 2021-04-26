import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const AsideStyled = styled.aside`
  grid-area: aside;
  background-color: ${color.colorDarkRedSecondary};
  padding: 50px 0;

  @media (max-width: 991px) {
    padding: 30px 20px;
  }

  @media (max-width: 767px) {
  }
`;

export const Logo = styled.figure`
  margin-bottom: 30px;

  & > img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export const Navigation = styled.nav``;

export const List = styled.div`
  margin-bottom: 30px;
  color: ${color.colorWhite};

  &:last-child {
    margin-bottom: 0px;
  }

  & > h3 {
    font-family: 'Quicksand', sans-serif;
    font-size: 22px;
    font-style: normal;
    line-height: 27.5px;
    font-weight: 700;
    margin-bottom: 8px;
    padding-left: 40px;
  }
`;

export const OptionList = styled.ul``;

export const OptionListItem = styled.li`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  padding-left: 40px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    padding-left: 35px;
    border-left: 5px solid ${color.colorRedPrincipal};
  }

  &.active {
    padding-left: 35px;
    border-left: 5px solid ${color.colorRedPrincipal};
    color: ${color.colorRedPrincipal};
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;
