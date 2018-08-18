import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}
  
  * {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, ul, p, figure {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

const colors = {
  skyblue: '#3aceec',
  darkblue: '#39c6e2',
  white: '#ffffff',
  black: '##2f2f2e',
  lightgray: '#f8f8f8',
  gray: '#eeeeee',
  darkgray: '#bbbbbb',
};

const sizes = {
  header: '3rem',
};

const spaces = {
  xsmall: '.5rem',
  small: '.8rem',
  normal: '1rem',
  big: '1.5rem',
  xbig: '2rem',
};

export default {
  colors: { ...colors },
  spaces: { ...spaces },
  sizes: { ...sizes },
};
