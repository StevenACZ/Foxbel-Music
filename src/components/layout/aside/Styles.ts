import styled from 'styled-components';

export const AsideStyled = styled.aside`
  grid-area: aside;
  border: 1px solid blue;

  @media (max-width: 991px) {
    padding: 30px 20px;
  }

  @media (max-width: 767px) {
  }
`;
