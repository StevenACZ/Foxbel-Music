import styled from 'styled-components';
import { color } from '../../theme/variables';

export const SpinStyled = styled.div`
  & > span {
    color: ${color.colorDarkRedSecondary};
    font-size: 40px;
    z-index: 9999;
  }
`;
