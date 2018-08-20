import React from 'react';
import styled from 'styled-components';

import Image from 'components/shared/utils/Image';

import photo from 'defaultImages/photo.jpg';

const Wrapper = styled.figure``;

const Photo = () => {
  return (
    <Wrapper>
      <Image src={photo} />
    </Wrapper>
  );
};

export default Photo;
