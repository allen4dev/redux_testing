import React from 'react';
import styled from 'styled-components';

import AvatarList from 'components/shared/AvatarList';
import Footer from 'components/shared/Footer';

import Tweet from 'components/shared/tweets/Tweet';

import splash from 'defaultImages/splash.png';

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.lightgray};
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 3fr 2fr;
`;

const SplashImage = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  background-image: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SplashContent = styled.section`
  padding: 1rem 2rem;
  grid-column: 1/-1;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TweetContainer = styled.div`
  margin: 0 auto;
`;

const Text = styled.p`
  margin-left: 0.5rem;
`;

const Welcome = () => {
  return (
    <Wrapper>
      <SplashImage src={splash} />

      <SplashContent>
        <Header>
          <AvatarList />

          <Text>Are on twitter!</Text>
        </Header>

        <TweetContainer>
          <Tweet />
        </TweetContainer>
      </SplashContent>

      <Footer />
    </Wrapper>
  );
};

export default Welcome;
