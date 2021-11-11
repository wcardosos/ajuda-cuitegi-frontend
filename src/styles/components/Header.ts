import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = styled.div`
  background: url("/public/logo-primary.svg");
  width: 20%;
  height: 100%;
`;

export default {
  HeaderContainer,
  HeaderLogo,
};
