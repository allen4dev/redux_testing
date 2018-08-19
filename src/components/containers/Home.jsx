import React from 'react';
import styled from 'styled-components';

import UserPanel from 'components/shared/UserPanel';
import TweetBar from 'components/shared/tweets/TweetBar';
import Timeline from 'components/shared/Timeline';
import Recommendations from 'components/shared/Recommendations';

const Wrapper = styled.section`
  margin-top: 7em;
`;

const Home = () => {
  return (
    <Wrapper>
      <UserPanel />
      <TweetBar />
      <Timeline />
      <Recommendations />
    </Wrapper>
  );
};

export default Home;
