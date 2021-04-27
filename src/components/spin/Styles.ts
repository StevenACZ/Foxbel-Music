import styled from 'styled-components';
import { color } from '../../theme/variables';

export const SpinStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & > span {
    color: ${color.colorDarkRedSecondary};
    font-size: 40px;
    position: absolute;
    z-index: 9999;
  }
`;
