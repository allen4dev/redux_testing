import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.footer``;
const List = styled.ul`
  padding: 0.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.li`
  padding: 0.5rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <StyledLink to="/">Link 1</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 2</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 3</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 4</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 5</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 6</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 7</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 8</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 9</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 10</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 11</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 12</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 13</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 14</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 15</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 16</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Link 17</StyledLink>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Footer;
