import React from 'react';
import styled from 'styled-components';

import Image from './Image';

const Wrapper = styled.figure`
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
  width: ${props => props.width};
`;

const Avatar = ({ src, width }) => {
  return (
    <Wrapper width={width}>
      <Image src={src} />
    </Wrapper>
  );
};

export default Avatar;
