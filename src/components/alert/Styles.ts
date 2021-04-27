import styled from 'styled-components';
import { color } from '../../theme/variables';

interface Props {
  type: string;
}

export const AlertStyled = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 13px 20px;

  ${({ type }) => {
    if (type === 'error') {
      return `
        background-color: ${color.colorError};
      `;
    } else if (type === 'warning') {
      return `
        background-color: ${color.colorWarning};
      `;
    } else if (type === 'success') {
      return `
        background-color: ${color.colorSuccess};
      `;
    }
  }}

  & > .anticon {
    font-size: 20px;
  }

  & > p {
    font-family: 'Quicksand', sans-serif;
    color: ${color.colorBlack};
    font-size: 12px;
    font-weight: 400;
    margin-left: 10px;
  }
`;
