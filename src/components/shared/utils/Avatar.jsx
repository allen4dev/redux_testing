import React from 'react';
import styled from 'styled-components';

import Image from './Image';

const Wrapper = styled.figure`
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
`;

const Avatar = ({ src }) => {
  return (
    <Wrapper>
      <Image src={src} />
    </Wrapper>
  );
};

export default Avatar;
