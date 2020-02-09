import React, { Component } from 'react';
import AppContext from '../AppContext';
import './DemoPopup.css';

class DemoPopup extends Component {
  static contextType = AppContext;

  openSignUpForm = () => {
    this.context.hideModalForPopup();
    this.context.showModalForSignupForm();
  }

  render() {
    const { showPopup } = this.context;
    const handleShowHideModal = showPopup ? 'display-block' : 'display-none';

    return (
      <div id="popup-window" className={handleShowHideModal}>
        <h3 className="text">
          Sign up and create your own portfolio of restaurants & fast food joint!
        </h3>

        <div className="btn-signup-wrapper">
          <button
            type="button"
            className="btn-signup"
            onClick={() => this.openSignUpForm()}
          >
            SIGN UP
          </button>
        </div>
      </div>
    );
  }
}

export default DemoPopup;