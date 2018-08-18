import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  top: 25%;
  height: 50%;
  border: 4px solid darkgreen;
  left: 0;
  right: 0;
`;

const Information = () => {
  return (
    <Wrapper>
      <h4>Information</h4>
    </Wrapper>
  );
};

export default Information;
