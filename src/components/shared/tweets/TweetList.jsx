import React from 'react';
import styled from 'styled-components';

import TweetCard from 'components/shared/tweets/TweetCard';
import Tweet from 'components/shared/tweets/Tweet';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1em;
`;

const TweetList = () => {
  return (
    <Wrapper>
      <TweetCard>
        <Tweet />
      </TweetCard>

      <TweetCard>
        <Tweet />
      </TweetCard>

      <TweetCard>
        <Tweet />
      </TweetCard>
    </Wrapper>
  );
};

export default TweetList;
