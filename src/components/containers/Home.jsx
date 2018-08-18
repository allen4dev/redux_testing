import React from 'react';
import styled from 'styled-components';

import UserPanel from 'components/shared/UserPanel';
import Timeline from 'components/shared/Timeline';
import Recommendations from 'components/shared/Recommendations';

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
