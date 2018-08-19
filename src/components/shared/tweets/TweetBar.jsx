import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

import src from 'defaultImages/avatar.jpg';

const Wrapper = styled.div`
  background-color: white;
  padding: 0 ${props => props.theme.spaces.normal};
  height: 4rem;
  width: 50vw;
  position: fixed;
  top: ${props => props.theme.sizes.header};
  left: 25vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  color: ${props => props.theme.colors.darkgray};
  padding: ${props => props.theme.spaces.xsmall};
  flex: 1;
`;
const Button = styled.button`
  margin-left: ${props => props.theme.spaces.xsmall};
  border: none;
  color: white;
  background-color: lightgray;
  padding: ${props => props.theme.spaces.xsmall} 1em;
  border-radius: ${props => props.theme.spaces.xbig};
  font-size: ${props => props.theme.spaces.small};
  font-weight: bold;
`;

const TweetBar = () => {
  return (
    <Wrapper>
      <Avatar src={src} width="50px" />
      <Form>
        <Input placeholder="Whats on your mind?" />
        <Button>Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default TweetBar;
