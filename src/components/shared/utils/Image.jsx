import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.img`
  background-image: ${props => props.url};
  display: block;
  max-width: 100%;
`;

const Image = ({ src }) => {
  return <Wrapper src={src} alt="" />;
};

export default Image;
