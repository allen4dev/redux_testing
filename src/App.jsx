import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from 'components/containers/Home';
import Profile from 'components/containers/Profile';
import Splash from 'components/containers/Splash';

import Header from 'components/shared/Header';

import theme from 'theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <main className="App">
      {/* <Header /> */}
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/splash" component={Splash} />
        <Route path="/users/:id" component={Profile} />
      </div>
    </main>
  </ThemeProvider>
);

export default App;
