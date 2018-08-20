import React from 'react';
import styled from 'styled-components';

import About from 'components/shared/About';
import PhotoSection from 'components/shared/photos/PhotoSection';

const Wrapper = styled.section`
  grid-area: details;
`;

const Detail = () => {
  return (
    <Wrapper>
      <About />
      <PhotoSection />
    </Wrapper>
  );
};

export default Detail;
