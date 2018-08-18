import React from 'react';
import styled from 'styled-components';

import List from './List';

const notifications = [
  {
    action: 'replied',
    message: '{{User}} replied your tweet {{ Tweet title }}',
  },
  {
    action: 'favorited',
    message: '{{User}} favorited your tweet {{ Tweet title }}',
  },
  {
    action: 'followed',
    message: '{{User}} is now following you',
  },
];

const Wrapper = styled.section`
  border: 2px solid orange;
`;

const Title = styled.h3``;

const Notifications = props => {
  return (
    <Wrapper>
      <Title>Notifications</Title>

      <List notifications={notifications} />
    </Wrapper>
  );
};

export default Notifications;
