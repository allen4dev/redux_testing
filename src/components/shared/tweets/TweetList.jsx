import React from 'react';
import styled from 'styled-components';

import TweetCard from 'components/shared/tweets/TweetCard';
import Tweet from 'components/shared/tweets/Tweet';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1em;
`;

const TweetList = ({ tweets }) => {
  console.log(tweets);
  return (
    <Wrapper>
      {tweets.map(tweet => (
        <TweetCard key={tweet}>
          <Tweet id={tweet} />
        </TweetCard>
      ))}
    </Wrapper>
  );
};

export default TweetList;
