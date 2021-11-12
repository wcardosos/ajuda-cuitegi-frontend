import React from 'react';
import Image from './Image';
import styles from '../styles/components/Header';

const logo = '/assets/logo-primary.png';

const { HeaderContainer } = styles;

const Header: React.FC = () => (
  <HeaderContainer>
    <Image source={logo} alternativeText="Ajuda Cuitegi" heightPercentual={100} />
  </HeaderContainer>
);

export default Header;
