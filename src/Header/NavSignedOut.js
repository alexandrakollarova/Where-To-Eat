import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';
import './Header.css';

class NavSignedOut extends Component {
  static contextType = AppContext;

  state = { isMenuActive: false }

  handleOpenMenu = () => {
    this.setState({ isMenuActive: true });
  }

  handleCloseMenu = () => {
    this.setState({ isMenuActive: false });
  }

  onSignupClick = () => {
    const { showModalForSignupForm, hideModalForLoginForm } = this.context;
    this.handleCloseMenu();
    hideModalForLoginForm();
    showModalForSignupForm();
  }

  onLoginClick = () => {
    const { showModalForLoginForm, hideModalForSignupForm } = this.context;
    this.handleCloseMenu();
    hideModalForSignupForm();
    showModalForLoginForm();
  }

  openSignedOutMenu() {
    const { isMenuActive } = this.state;
    const logoutLoginStyle = { color: '#F9643A' };
    const openCloseIconsStyle = { color: '#F9643A', fontSize: '36px' };

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
          <NavLink to="/demo" onClick={() => this.handleCloseMenu()}>demo</NavLink>
        </li>
      </ul>
    );
  }

  render() {    
    const { isMenuActive } = this.state;
    const logoutLoginStyle = { color: '#F9643A' };
    const openCloseIconsStyle = {
      background: 'linear-gradient(to right, #F9643A, #EC3A69)',
      WebkitBackgroundClip: 'text',   
      WebkitTextFillColor: 'transparent',
      fontSize: '40px'
    };

    return (
      <nav className="nav-landing">
        <button
          type="button"
          className="utensils-icon"
          onClick={this.handleOpenMenu}
        >
          <i className="material-icons" style={openCloseIconsStyle}>restaurant</i>
        </button>

        {isMenuActive && this.openSignedOutMenu()}

        <ul
          className="desktop-menu"
        >
          <li>
            <NavLink to="/demo">demo</NavLink>
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
