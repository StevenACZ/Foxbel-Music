import styled from 'styled-components';
import { color } from '../../theme/variables';

export const MainMusicStyled = styled.section`
  display: flex;
  width: 100%;
  height: 250px;
`;

export const Image = styled.figure`
  position: relative;
  display: block;
  min-width: 250px;
  max-width: 250px;
  height: 100%;

  & > img:first-child {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const IconPlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

interface Props {
  image: string;
}

export const More = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 0 25px 32px;
  background: rgba(250, 118, 118, 0.7);
  height: 100%;
  width: 100%;

  &::after {
    position: absolute;
    content: '';
    background: url('${(props) => props.image}');
    opacity: 0.6;
    top: 0;
    right: 0;
    width: 100%;
    height: 250px;
    z-index: -1;
  }
`;

export const Information = styled.div``;

export const Intro = styled.div`
  margin-bottom: 20px;

  & > h3 {
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorWhite};
    font-size: 22px;
    line-height: 27.5px;
    font-weight: 700;
  }

  & > div {
    display: flex;
    align-items: center;

    & > p {
      font-family: 'Quicksand', sans-serif;
      color: ${color.colorWhite};
      font-size: 14px;
      line-height: 17.5px;
      font-weight: 400;
      margin-right: 16px;
    }

    & > span {
      font-family: 'Quicksand', sans-serif;
      color: ${color.colorDarkRedSecondary};
      font-size: 10px;
      line-height: 12.5px;
      font-weight: 400;
    }
  }
`;

export const Description = styled.div`
  & > p {
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorWhite};
    font-size: 12px;
    line-height: 20.19px;
    font-weight: 400;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 117px;
    height: 31px;
    background-color: transparent;
    border: 1px solid ${color.colorRedPrincipal};
    border-radius: 100px;
    color: ${color.colorRedPrincipal};
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
    cursor: pointer;

    &.active {
      background-color: ${color.colorRedPrincipal};
      color: ${color.colorWhite};
    }

    &:hover {
      background-color: ${color.colorRedPrincipal};
      color: ${color.colorWhite};
    }
  }

  & > button:first-child {
    margin-right: 20px;
  }
`;
