import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border: 4px solid #bada55;
  position: fixed;
  top: ${props => props.theme.sizes.header};
  right: 0;
  width: 25vw;
  height: calc(100vh - ${props => props.theme.sizes.header});
`;

const Recommendations = () => {
  return (
    <Wrapper>
      <h1>Recommendations</h1>
    </Wrapper>
  );
};

export default Recommendations;
