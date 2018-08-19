import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

import avatar from 'defaultImages/avatar.jpg';

const Wrapper = styled.li`
  padding: ${props => props.theme.spaces.xsmall};
  display: flex;
  align-items: center;
`;

const Details = styled.section`
  margin-left: ${props => props.theme.spaces.normal};
`;

const Heading = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spaces.xsmall};
`;

const Fullname = styled.h4`
  margin-right: 0.2rem;
`;
const Username = styled.span`
  color: gray;
`;

const Text = styled.p`
  font-size: ${props => props.theme.spaces.small};
`;

const User = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} width="55px" />
      <Details>
        <Heading>
          <Fullname>Emiya Shirou</Fullname>
          <Username>@archer</Username>
        </Heading>
        <Text>Followed by Yatogami</Text>
      </Details>
    </Wrapper>
  );
};

export default User;
