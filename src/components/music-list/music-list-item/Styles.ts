import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const MusicListItemStyled = styled.li`
  width: 100%;
  height: 100%;
`;

export const Image = styled.figure`
  position: relative;
  display: block;
  height: 160px;

  & > img:first-child {
    width: 100%;
    height: 100%;
  }
`;

export const IconPlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 36px;
  cursor: pointer;
`;

export const IconThreeVertical = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const Information = styled.div`
  padding-top: 10px;

  & > h3 {
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorBlack};
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 700;
  }

  & > p {
    margin-top: 3px;
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorGray};
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
`;
