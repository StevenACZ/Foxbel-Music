import styled from 'styled-components';
import { color } from '../../theme/variables';

export const MusicListStyled = styled.section`
  margin: 40px 0 116px;

  & > h2 {
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorRedPrincipal};
    font-size: 22px;
    line-height: 27.5px;
    font-weight: 700;
  }
`;

export const MusicListContent = styled.ul`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 22px;
  grid-row-gap: 25px;
`;
