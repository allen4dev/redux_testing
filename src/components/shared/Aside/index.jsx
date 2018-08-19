import React from 'react';
import styled from 'styled-components';

import Recommendations from './Recommendations';
import Trending from './Trending';

const Wrapper = styled.aside`
  position: fixed;
  top: ${props => props.theme.sizes.header};
  right: 0;
  width: 25vw;
  height: calc(100vh - ${props => props.theme.sizes.header});
`;

const Aside = () => {
  return (
    <Wrapper>
      <Recommendations />
      <Trending />
    </Wrapper>
  );
};

export default Aside;
