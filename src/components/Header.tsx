import React from 'react';
import styles from '../styles/components/Header';
// import Logo from '../assets/logo-primary.svg';

const { HeaderContainer, HeaderLogo } = styles;

const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderLogo />
  </HeaderContainer>
);

export default Header;
