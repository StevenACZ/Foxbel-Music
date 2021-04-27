import styled from 'styled-components';

export const LayoutStyled = styled.section`
  min-height: 100vh;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 330px 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    'aside header'
    'aside main'
    'musicPlayer musicPlayer';
  padding: 30px 0;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 30px 20px;
  }

  @media (max-width: 767px) {
  }
`;
