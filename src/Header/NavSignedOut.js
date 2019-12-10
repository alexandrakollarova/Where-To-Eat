import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';
import './Header.css';
import logo from './logo.png';

class NavSignedOut extends Component {
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

  onSignupClick = () => {
    const { showModalForSignupForm } = this.context;
    this.handleCloseMenu();
    showModalForSignupForm();
  }

  onLoginClick = () => {
    const { showModalForLoginForm } = this.context;
    this.handleCloseMenu();
    showModalForLoginForm();
  }

  openSignedOutMenu() {
    const { isMenuActive } = this.state;
    const logoutLoginStyle = { color: '#F9643A' };

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
          <i className="material-icons close">close</i>
        </button>

        <li>
          <button
            type="button"
            className="btn-signup-modal"
            onClick={this.onLoginClick}
            style={logoutLoginStyle}
          >
            log in
          </button>
        </li>

        <li>
          <button
            type="button"
            className="btn-signup-modal"
            onClick={this.onSignupClick}
          >
            sign up
          </button>
        </li>

        <li>
          <NavLink to="/demo">demo</NavLink>
        </li>
      </ul>
    );
  }

  render() {
    const { isMenuActive } = this.state;
    const logoutLoginStyle = { color: '#F9643A' };

    return (
      <nav className="nav-landing">
        {/* <NavLink to="/">
            <img
              src={logo}
              alt="meal-icon-logo"
              className="logo-icon"
            />
          </NavLink> */}

        <button
          type="button"
          className="utensils-icon"
          onClick={this.handleOpenMenu}
        >
          <img
            src={logo}
            alt="meal-icon-logo"
            className="logo-icon"
          />
          {/* <i className="material-icons">restaurant</i> */}
        </button>

        {isMenuActive && this.openSignedOutMenu()}

        <ul
          className="desktop-menu"
        >
          <li>
            <NavLink to="/demo-page">demo</NavLink>
          </li>

          <li>
            <button
              type="button"
              className="btn-signup-modal"
              onClick={this.onSignupClick}
            >
              sign up
            </button>
          </li>

          <li>
            <button
              type="button"
              className="btn-signup-modal"
              onClick={this.onLoginClick}
              style={logoutLoginStyle}
            >
              log in
            </button>
          </li>
        </ul>

      </nav>
    );
  }
}

export default NavSignedOut;
