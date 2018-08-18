import React from 'react';
import styled from 'styled-components';

import SearchBar from 'components/shared/utils/SearchBar';

import Logo from './Logo';
import Navigation from './Navigation';

const Wrapper = styled.header`
  background-color: ${props => props.theme.colors.skyblue};
  display: grid;
  height: ${props => props.theme.sizes.header};
  grid-template-columns: 2fr 5fr 2fr;
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
