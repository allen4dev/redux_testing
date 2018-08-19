import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/utils/Avatar';

import avatar from 'defaultImages/avatar.jpg';

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
  display: flex;
  align-items: flex-start;
`;

const Content = styled.section`
  flex: 1;
  margin-left: 1rem;
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
  color: ${props => props.theme.colors.darkgray};
`;

const Body = styled.p``;
const Actions = styled.div``;

const Timeline = () => {
  return (
    <Wrapper>
      <TweetList>
        <TweetCard>
          <Tweet>
            <Avatar src={avatar} width="70px" />
            <Content>
              <Heading>
                <Fullname>Allen Walker</Fullname>
                <Username>@allen</Username>
              </Heading>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit reiciendis, illo natus labore adipisci in repellat
                obcaecati eius, consectetur quasi possimus quae, ad nihil est
                fugiat! Soluta quis vitae recusandae.
              </Body>
            </Content>
          </Tweet>

          <Actions>Favorite, Retweets, Reply here</Actions>
        </TweetCard>

        <TweetCard>
          <Tweet>
            <Avatar src={avatar} width="70px" />
            <Content>
              <Heading>
                <Fullname>Allen Walker</Fullname>
                <Username>@allen</Username>
              </Heading>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit reiciendis, illo natus labore adipisci in repellat
                obcaecati eius, consectetur quasi possimus quae, ad nihil est
                fugiat! Soluta quis vitae recusandae.
              </Body>
            </Content>
          </Tweet>

          <Actions>Favorite, Retweets, Reply here</Actions>
        </TweetCard>
      </TweetList>
    </Wrapper>
  );
};

export default Timeline;
