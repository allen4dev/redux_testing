import React from 'react';
import styled from 'styled-components';

import UserCard from './UserCard';

import Notifications from '../Notifications';

const Wrapper = styled.section`
  border: 4px solid blue;
  position: fixed;
  top: 4em;
  left: 0;
  width: 25vw;
  height: calc(100vh - 4em);
`;

const UserPanel = () => {
  return (
    <Wrapper>
      <UserCard />
      <Notifications />
    </Wrapper>
  );
};

export default UserPanel;
