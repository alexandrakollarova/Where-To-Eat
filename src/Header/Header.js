import React, { Component } from 'react';
import NavSignedOut from './NavSignedOut';
import NavSignedIn from './NavSignedIn';
import AppContext from '../AppContext';
import TokenService from '../services/token-service';

class Header extends Component {
  static contextType = AppContext;

  render() {
    return (
      <header>
        {
          TokenService.hasAuthToken()
            ? <NavSignedIn />
            : <NavSignedOut />
        }
      </header>
    );
  }
}

export default Header;
