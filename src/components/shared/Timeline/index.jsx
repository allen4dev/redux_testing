import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.lightgray}
  margin-left: 25vw;
  padding: ${props => props.theme.spaces.normal};
  width: 50vw;
`;

const TweetList = styled.section``;
const TweetCard = styled.article``;

const Tweet = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spaces.xsmall};
`;

const Heading = styled.header``;
const Fullname = styled.h4``;
const Username = styled.span``;
const Body = styled.p``;
const Actions = styled.div``;

const Timeline = () => {
  return (
    <Wrapper>
      <TweetList>
        <TweetCard>
          <Tweet>
            <Avatar />
            <Heading>
              <Fullname>Allen Walker</Fullname>
              <Username>@allen</Username>
            </Heading>
            <Body>Content of the Tweet</Body>
          </Tweet>

          <Actions>Favorite, Retweets, Reply here</Actions>
        </TweetCard>
      </TweetList>
    </Wrapper>
  );
};

export default Timeline;
