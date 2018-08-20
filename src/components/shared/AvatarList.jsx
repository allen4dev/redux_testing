import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

import avatar from 'defaultImages/avatar.jpg';

const Wrapper = styled.div`
  display: flex;

  & > figure:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const AvatarList = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} width="60px" />
      <Avatar src={avatar} width="60px" />
      <Avatar src={avatar} width="60px" />
      <Avatar src={avatar} width="60px" />
      <Avatar src={avatar} width="60px" />
    </Wrapper>
  );
};

export default AvatarList;
