import styled from 'styled-components';
import { color } from '../../theme/variables';

export const MusicPlayerStyled = styled.footer`
  grid-area: musicPlayer;
  background-color: ${color.colorRedPrincipal};
  display: flex;
  align-items: center;
`;

export const Image = styled.figure`
  min-width: 100px;
  width: 100px;
  height: 100%;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Player = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Infomation = styled.div`
  & > h3 {
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorWhite};
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 700;
  }

  & > p {
    margin-top: 8px;
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorWhite};
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
`;

export const Actions = styled.div`
  color: ${color.colorWhite};
  font-size: 43px;

  .anticon-step-backward {
    cursor: pointer;
  }

  .anticon-play-circle {
    margin: 0 20px;
    cursor: pointer;
  }

  .anticon-pause-circle {
    margin: 0 20px;
    cursor: pointer;
  }

  .anticon-step-forward {
    cursor: pointer;
  }
`;

export const Volume = styled.div``;
