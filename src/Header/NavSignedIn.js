import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';
import TokenService from '../services/token-service';
import logo from './logo.png';

class NavSignedIn extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  // eslint-disable-next-line react/state-in-constructor
  state = { isMenuActive: false }

  handleOpenMenu = () => {
    this.setState({ isMenuActive: true });
  }

  handleCloseMenu = () => {
    this.setState({ isMenuActive: false });
  }

  handleLogOut = () => {
    const { handleUserSignedIn } = this.context;
    TokenService.clearAuthToken();
    handleUserSignedIn();
    this.handleCloseMenu();
  }

  openSignedInMenu() {
    const { isMenuActive } = this.state;

    return (
      <ul
        className="open-menu"
        style={{ display: isMenuActive ? 'block' : 'none' }}
      >
        <button
          type="button"
          className="close-icon"
          onClick={this.handleCloseMenu}
        >
          <i className="material-icons">close</i>
        </button>

        <li>
          <NavLink to="/my-collection">My collection</NavLink>
        </li>
        <li>
          <NavLink to="/search">Add places</NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={this.handleLogOut}
          >
            Log out
          </button>
        </li>
      </ul>
    );
  }

  render() {
    const { isMenuActive } = this.state;

    return (
      <nav className="nav-landing">
        <NavLink to="/">
          <img
            src={logo}
            alt="meal-icon-logo"
            className="logo-icon"
          />
        </NavLink>

        <button
          type="button"
          className="utensils-icon"
          onClick={this.handleOpenMenu}
        >
          <i className="material-icons">restaurant</i>
        </button>

        {isMenuActive && this.openSignedInMenu()}

        <ul
          className="desktop-menu"
        >
          <li>
            <NavLink to="/my-collection">My collection</NavLink>
          </li>
          <li>
            <NavLink to="/search">Add places</NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={this.handleLogOut}
            >
              Log out
            </button>
          </li>
        </ul>

      </nav>
    );
  }
}

export default NavSignedIn;
