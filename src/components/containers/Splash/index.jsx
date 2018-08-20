import React from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';
import Signup from './Signup';

const Wrapper = styled.section`
  border: 4px solid purple;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Splash = () => {
  return (
    <Wrapper>
      <Welcome />
      <Signup />
    </Wrapper>
  );
};

export default Splash;
