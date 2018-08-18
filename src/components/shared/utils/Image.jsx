import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.img`
  background-image: ${props => props.url};
  max-width: 100%;
`;

const Image = ({ url }) => {
  return <Wrapper url={url} alt="" />;
};

export default Image;
