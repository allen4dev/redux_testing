import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.img`
  background-image: ${props => props.url};
  max-width: 100%;
  font-size: ${props => props.theme.spaces.normal};
`;

const Image = ({ src }) => {
  return <Wrapper src={src} alt="" />;
};

export default Image;
