import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  background: ${props => props.theme.backgroundColor};
`;

const Avatar = styled.figure``;

const Image = styled.img``;

const Navigation = styled.nav``;

const List = styled.ul``;

const Item = styled.li``;

const SearchBar = styled.form``;

const TextBox = styled.input``;

const Header = () => {
  return (
    <Wrapper>
      <Avatar>
        <Image src="a.jpg" />
      </Avatar>

      <Navigation>
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
      </Navigation>

      <SearchBar>
        <TextBox type="text" />
      </SearchBar>
    </Wrapper>
  );
};

export default Header;
