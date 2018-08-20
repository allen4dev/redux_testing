import React from 'react';
import styled from 'styled-components';

import Photo from './Photo';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.width}, 1fr)
  );
  grid-gap: 0.5rem;
`;
// grid-template-columns: 1fr 1fr 1fr;

const PhotoList = ({ width }) => {
  return (
    <Wrapper width={width}>
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
