import React, { Component } from 'react';

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'
import Products from './containers/Products/Products'

import classes from './App.module.css'
import logo from './logo.svg';

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <nav className={classes.HeaderNav}>
              <div>
              <img className={classes.Logo} src={logo} alt="logo" />
              </div>
              <NavigationItems />
          </nav>
        </header>
        <Products />
      </div>
    );
  }
}

export default App;
