import React from 'react';
import styled from 'styled-components';

import User from './User';

const Wrapper = styled.ul`
  padding: 0 ${props => props.theme.spaces.xsmall};
`;

const UserList = () => {
  return (
    <Wrapper>
      <User />
      <User />
      <User />
    </Wrapper>
  );
};

export default UserList;
