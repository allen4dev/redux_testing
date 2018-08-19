import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  width: 25vw;
  height: 100%;
`;

const TextBox = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.darkblue};
  border: none;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  padding: 0;
  text-align: center;
`;

const SearchBar = () => (
  <Wrapper>
    <TextBox placeholder="Search twitter" />
  </Wrapper>
);

export default SearchBar;
