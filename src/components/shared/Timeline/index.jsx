import React from 'react';
import styled from 'styled-components';

import TweetList from 'components/shared/tweets/TweetList';

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.lightgray}
  margin-left: 25vw;
  padding: ${props => props.theme.spaces.normal};
  width: calc(50vw - ${props => props.theme.spaces.normal});
`;

const Timeline = () => {
  return (
    <Wrapper>
      <TweetList />
    </Wrapper>
  );
};

export default Timeline;
