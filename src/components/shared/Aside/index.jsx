import React from 'react';
import styled from 'styled-components';

import Recommendations from './Recommendations';
import Trending from './Trending';

const Wrapper = styled.aside`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 1px ${props => props.theme.colors.gray};
  position: ${props => props.position || 'initial'};
  top: ${props => props.top || 0};
  right: 0;
  width: 25vw;
  height: calc(100vh - ${props => props.theme.sizes.header});
`;

// ! Refactor to a reusable component
const Aside = ({ top, position }) => {
  return (
    <Wrapper top={top} position={position}>
      <Recommendations />
      <Trending />
    </Wrapper>
  );
};

export default Aside;
