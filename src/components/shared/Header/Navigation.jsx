import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav``;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em;
`;

const Item = styled.li``;

const Navigation = () => (
  <Wrapper>
    <List>
      <Item>
        <StyledLink to="/">Home</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">Notifications</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">Messages</StyledLink>
      </Item>
    </List>
  </Wrapper>
);

export default Navigation;
