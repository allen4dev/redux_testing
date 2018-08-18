import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './components/containers/Home';

import Header from './components/shared/Header';

// ToDo: Move theme to his own file
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
  header: '4rem',
};

const spaces = {
  xsmall: '.5rem',
  small: '.8rem',
  normal: '1rem',
  big: '1.5rem',
  xbig: '2rem',
};

const theme = {
  colors: { ...colors },
  spaces: { ...spaces },
  sizes: { ...sizes },
};

// ToDo: add some styles to reset the initial css
const App = () => (
  <ThemeProvider theme={theme}>
    <main className="App">
      <Header />

      <div>
        <Route exact path="/" component={Home} />
      </div>
    </main>
  </ThemeProvider>
);

export default App;
