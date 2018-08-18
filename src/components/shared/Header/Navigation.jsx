import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav``;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li``;

const Navigation = () => (
  <Wrapper>
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/">Notifications</Link>
      </Item>
      <Item>
        <Link to="/">Messages</Link>
      </Item>
    </List>
  </Wrapper>
);

export default Navigation;
