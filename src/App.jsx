import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './components/containers/Home';

const App = () => {
  return (
    <main className="App">
      <header className="Header">
        <figure className="Logo">
          <img src="" alt="twitter" className="Logo-image" />
        </figure>

        <nav className="Navigation">
          <ul className="Navigation-list">
            <li className="Navigation-item">
              <Link to="/">Home</Link>
            </li>
            <li className="Navigation-item">
              <Link to="/notifications">Notifications</Link>
            </li>
            <li className="Navigation-item">
              <Link to="/messages">Messages</Link>
            </li>
          </ul>
        </nav>

        <form className="Searchbar">
          <input type="text" className="Searchbar-input" />
        </form>

        <div className="Header-user">
          <figure className="Avatar">
            <img src="" alt="avatar" className="Avatar-img" />
          </figure>
        </div>
      </header>

      <div>
        <Route exact path="/" component={Home} />
      </div>
    </main>
  );
};

export default App;
