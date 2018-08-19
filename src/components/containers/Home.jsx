import React from 'react';
import styled from 'styled-components';

import UserPanel from 'components/shared/UserPanel';
import TweetBar from 'components/shared/tweets/TweetBar';
import Timeline from 'components/shared/Timeline';
import Aside from 'components/shared/Aside';

const Wrapper = styled.section`
  margin-top: 7em;
`;

const Home = () => {
  return (
    <Wrapper>
      <UserPanel />
      <TweetBar />
      <Timeline />
      <Aside position="fixed" top="3rem" />
    </Wrapper>
  );
};

export default Home;
