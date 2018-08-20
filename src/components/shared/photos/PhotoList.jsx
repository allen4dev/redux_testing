import React from 'react';
import styled from 'styled-components';

import Photo from './Photo';

const Wrapper = styled.section``;

const PhotoList = () => {
  return (
    <Wrapper>
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </Wrapper>
  );
};

export default PhotoList;
