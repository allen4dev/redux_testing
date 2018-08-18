import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';

import SearchBar from '../utils/SearchBar';

const Wrapper = styled.header`
  background-color: ${props => props.theme.skyblue};
  display: grid;
  height: ${props => props.theme.header};
  grid-template-columns: 2fr 4fr 2fr;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation />
    <SearchBar />
  </Wrapper>
);

export default Header;
