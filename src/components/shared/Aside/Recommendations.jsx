import React from 'react';
import styled from 'styled-components';

import UserList from 'components/shared/users/UserList';

const Wrapper = styled.section``;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  padding: ${props => props.theme.spaces.big}
    ${props => props.theme.spaces.normal} ${props => props.theme.spaces.normal};
  text-transform: uppercase;
`;

const Recommendations = () => {
  return (
    <Wrapper>
      <Title>Who to Follow</Title>
      <UserList />
    </Wrapper>
  );
};

export default Recommendations;
