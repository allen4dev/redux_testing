import React from 'react';
import styled from 'styled-components';

import PhotoList from './PhotoList';

const Wrapper = styled.section``;
const Title = styled.h2``;

const PhotoSection = () => {
  return (
    <Wrapper>
      <Title>Photos</Title>
      <PhotoList />
    </Wrapper>
  );
};

export default PhotoSection;
