import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 2rem;
  grid-column: 2/-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.skyblue};
  text-transform: capitalize;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.gray};
  padding: 0.5rem;
`;

const Form = styled.form`
  width: 50%;

  & > input {
    margin-bottom: 1rem;
  }
`;
const Input = styled.input`
  border: none;
  border-radius: 2px;
  color: ${props => props.theme.colors.darkgray};
  font-size: 1rem;
  padding: 1rem 1.2rem;
  width: 100%;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Separator = styled.div`
  color: white;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
`;
const CheckBox = styled.div``;
const Button = styled.button`
  color: white;
  background-color: ${props =>
    props.flat ? 'transparent' : props.theme.colors.skyblue};
  border: ${props => (props.flat ? '1px solid white' : 'none')};
  padding: 1rem 1.2rem;
  width: ${props => (props.flexible ? '100%' : 'auto')};
`;

const Signup = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Welcome to twitter</Title>
        <Text>Get in-the-moment updates on the things that interest you</Text>
      </Header>

      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Options>
          <CheckBox>Remember Me</CheckBox>
          <Button flat>Signin</Button>
        </Options>
        <Separator>Or</Separator>
        <Input placeholder="Enter Full Name" />
        <Button flexible>Sign Up for twitter</Button>
      </Form>
    </Wrapper>
  );
};

export default Signup;
