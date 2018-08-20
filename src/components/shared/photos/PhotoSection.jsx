import React from 'react';
import styled from 'styled-components';

import PhotoList from './PhotoList';

const Wrapper = styled.section`
  padding: 0 1.5rem;
`;
const Title = styled.h2`
  padding: 1rem 0;
`;

const PhotoSection = () => {
  return (
    <Wrapper>
      <Title>Photos</Title>
      <PhotoList width="75px" />
    </Wrapper>
  );
};

export default PhotoSection;
