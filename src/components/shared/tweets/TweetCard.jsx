import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 1px ${props => props.theme.colors.gray};
  border-radius: 2px;
`;

const Actions = styled.div`
  background-color: #fbfbfb;
  padding: 1em;
  box-shadow: inset 0 1px 1px lightgray;
`;

const TweetCard = ({ children }) => {
  return (
    <Wrapper>
      {children}

      <Actions>Favorite, Retweets, Reply here</Actions>
    </Wrapper>
  );
};

export default TweetCard;
