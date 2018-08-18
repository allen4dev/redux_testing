import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './components/containers/Home';

import Header from './components/shared/Header';

const theme = {
  backgroundColor: '#bada55',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <Header />

        <div>
          <Route exact path="/" component={Home} />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
