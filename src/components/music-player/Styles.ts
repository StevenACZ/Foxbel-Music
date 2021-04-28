import styled from 'styled-components';
import { color } from '../../theme/variables';

export const MusicPlayerStyled = styled.footer`
  grid-area: musicPlayer;
  background-color: ${color.colorRedPrincipal};
  display: flex;
  align-items: center;
`;

export const NULLMusicPlayerStyled = styled.footer`
  grid-area: musicPlayer;
  height: 100%;
  width: 100%;

  & > div {
    height: 100%;
    width: 100%;
  }
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

export const Volume = styled.div`
  input[type='range'] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: ${color.colorWhite}; /* Otherwise white in Chrome */
    border-radius: 100px;
    height: 6px;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type='range']:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  /* Special styling for WebKit/Blink */
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid rgba(255, 109, 109, 0.2);
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
  }

  /* All the same stuff for Firefox */
  input[type='range']::-moz-range-thumb {
    border: 1px solid rgba(255, 109, 109, 0.2);
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
  }

  /* All the same stuff for IE */
  input[type='range']::-ms-thumb {
    border: 1px solid rgba(255, 109, 109, 0.2);
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
  }
`;
