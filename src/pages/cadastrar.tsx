import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Form from '../components/Form';
import Header from '../components/Header';
import styles from '../styles/pages/cadastrar';

import CareImageDesktop from '../assets/care-desktop.svg';
import CareImageMobile from '../assets/care-mobile.svg';

const {
  ContentSection,
  InstagramDiv,
  MainContainer,
  MainContent,
  PageTitle,
} = styles;

const CreateHelp: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 420) {
      setIsMobileView(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ajuda Cuitegi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MainContainer>
        <PageTitle>Cadastro de Ajuda</PageTitle>
        <MainContent>
          <ContentSection>
            <Form />
            <InstagramDiv>@ajudacuitegi</InstagramDiv>
          </ContentSection>
          <ContentSection>
            { isMobileView ? <CareImageMobile /> : <CareImageDesktop /> }
          </ContentSection>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default CreateHelp;
