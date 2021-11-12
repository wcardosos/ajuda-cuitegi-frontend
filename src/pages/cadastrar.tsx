import React from 'react';
import Head from 'next/head';
import Form from '../components/Form';
import Header from '../components/Header';
import Image from '../components/Image';
import styles from '../styles/pages/cadastrar';

const careImage = '../assets/care.png';

const {
  ContentSection,
  InstagramDiv,
  MainContainer,
  MainContent,
  PageTitle,
} = styles;

const CreateHelp: React.FC = () => (
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
          <Image source={careImage} alternativeText="Ajuda às pessoas" widthPercentual={100} />
        </ContentSection>
      </MainContent>
    </MainContainer>
  </>
);

export default CreateHelp;
