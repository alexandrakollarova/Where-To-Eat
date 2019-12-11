import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';
import TokenService from '../services/token-service';
import logo from './logo.png';

class NavSignedIn extends Component {
  static contextType = AppContext;

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
    const logoutLoginStyle = { color: '#F9643A' };
    const openCloseIconsStyle = { color: '#00BCD4', fontSize: '36px' };

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
          <i className="material-icons close" style={openCloseIconsStyle}>close</i>
        </button>

        <li>
          <NavLink to="/my-collection">my collection</NavLink>
        </li>
        <li>
          <NavLink to="/search">add places</NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={this.handleLogOut}
            className="btn-log-out"
            style={logoutLoginStyle}
          >
            log out!
          </button>
        </li>
      </ul>
    );
  }

  render() {
    const { isMenuActive } = this.state;
    const logoutLoginStyle = { color: '#F9643A' };
    const openCloseIconsStyle = { color: '#00BCD4', fontSize: '36px' };

    return (
      <nav className="nav-landing">
      
        <button
          type="button"
          className="utensils-icon"
          onClick={this.handleOpenMenu}
        >
          <i className="material-icons" style={openCloseIconsStyle}>restaurant</i>

        </button>

        {isMenuActive && this.openSignedInMenu()}

        <ul
          className="desktop-menu"
        >
          <li>
            <NavLink to="/my-collection">my collection</NavLink>
          </li>
          <li>
            <NavLink to="/search">add places</NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={this.handleLogOut}
              style={logoutLoginStyle}
            >
              log out
            </button>
          </li>
        </ul>

      </nav>
    );
  }
}

export default NavSignedIn;
