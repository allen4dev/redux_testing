import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  grid-column: 2/-1;
`;
const Title = styled.h1``;
const Text = styled.p``;
const Form = styled.form``;
const Input = styled.input``;
const Options = styled.div``;
const CheckBox = styled.div``;
const Button = styled.button``;
const Separator = styled.span``;

const Signup = () => {
  return (
    <Wrapper>
      <Title>Welcome to twitter</Title>
      <Text>Get in-the-moment updates on the things that interest you</Text>

      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Options>
          <CheckBox>Remember Me</CheckBox>
          <Button>Signin</Button>
        </Options>
        <Separator>Or</Separator>
        <Input placeholder="Enter Full Name" />
        <Button>Sign Up for twitter</Button>
      </Form>
    </Wrapper>
  );
};

export default Signup;
