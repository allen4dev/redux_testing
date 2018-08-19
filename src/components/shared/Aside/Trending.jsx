import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section``;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  padding: ${props => props.theme.spaces.normal};
  text-transform: uppercase;
`;

const List = styled.ul`
  padding: 0 ${props => props.theme.spaces.xsmall};
`;
const Item = styled.li`
  padding: ${props => props.theme.spaces.xsmall}
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.gray};
  text-decoration: none;
`;

const Trending = () => {
  return (
    <Wrapper>
      <Title>Latest Trends</Title>

      <List>
        <Item>
          <StyledLink to="/">#FinalFantasy</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#WoWBFA</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#hgg</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#redesign</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#react</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#laravel</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#graphql</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">#NodeJS</StyledLink>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Trending;

