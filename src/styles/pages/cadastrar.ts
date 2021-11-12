import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled.section`
  width: 50%;
  min-height: 120vh;

  @media (min-width: 320px) and (max-width: 420px) {
    width: 100%;
    min-height: 0;
  }
`;

const InstagramDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Russo One', sans-serif;
  color: ${(props) => props.theme.colors.primary};
`;

const MainContent = styled.div`
  width: 90%;
  display: flex;

  @media (min-width: 320px) and (max-width: 420px) {
    flex-direction: column-reverse;
  }
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Russo One', sans-serif;

  @media (min-width: 320px) and (max-width: 420px) {
    font-size: 16px;
  }
`;

export default {
  ContentSection,
  InstagramDiv,
  MainContainer,
  MainContent,
  PageTitle,
};
