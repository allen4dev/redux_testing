import React from 'react';
import styled from 'styled-components';

import UserCard from './UserCard';

import Notifications from 'components/shared/Notifications';

const Wrapper = styled.section`
  position: fixed;
  top: ${props => props.theme.sizes.header};
  left: 0;
  width: 25vw;
  height: calc(100vh - ${props => props.theme.sizes.header});
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
