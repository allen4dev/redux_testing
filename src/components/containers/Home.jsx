import React from 'react';
import styled from 'styled-components';

import UserPanel from '../shared/UserPanel';
import Timeline from '../shared/Timeline';
import Recommendations from '../shared/Recommendations';

const Wrapper = styled.section`
  margin-top: ${props => props.theme.sizes.header};
`;

const Home = () => {
  return (
    <Wrapper>
      <UserPanel />
      <Timeline />
      <Recommendations />
    </Wrapper>
  );
};

export default Home;
