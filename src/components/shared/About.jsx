import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 5rem 1.5rem 1.5rem;
`;

const Title = styled.h2`
  padding: 1rem 0;
`;

const Text = styled.p`
  padding: 1rem 0;
`;

const List = styled.ul``;
const Item = styled.li`
  padding: 0.5rem 0;

  &::before {
    content: 'I';
    margin-right: 1rem;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Title>About User</Title>
      <Text>The official Tweeter of User</Text>
      <List>
        <Item>Location</Item>
        <Item>Email</Item>
        <Item>Joined ...</Item>
      </List>
    </Wrapper>
  );
};

export default About;
