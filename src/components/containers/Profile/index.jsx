import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Details from './Details';
import TweetList from 'components/shared/tweets/TweetList';
import Aside from 'components/shared/Aside';

const Wrapper = styled.section`
  margin-top: ${props => props.theme.sizes.header};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    'heading heading heading'
    'details tweets .';
`;

const TweetSection = styled.section`
  grid-area: tweets;
`;

const Profile = () => {
  return (
    <Wrapper>
      <Header />
      <Details />
      <TweetSection>
        <TweetList />
      </TweetSection>
      <Aside />
    </Wrapper>
  );
};

export default Profile;
