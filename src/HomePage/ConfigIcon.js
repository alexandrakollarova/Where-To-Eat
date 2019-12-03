import React, { Component } from 'react';
import AppContext from '../AppContext';
import './ConfigIcon.css';
import Rating from './Rating';

class ConfigIcon extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  // eslint-disable-next-line react/state-in-constructor
  state = { isOn: false }

  handleSwitch = () => {
    this.setState((prevState) => ({ isOn: !prevState.isOn }), () => this.props.updateIsOpen(this.state.isOn));
  }
  
  render() {
    const handleShowHideModal = this.context.showConfigWindow ? 'display-block' : 'display-none';

    const isOnLabel = this.state.isOn ? 'YES' : 'NO';

    const categories = ['American', 'Italian', 'Indian', 'Chinese', 'Japanese', 'Asian', 'Korean', 'Mexican', 'Seafood', 'Sushi', 'Spanish', 'Sandwiches', 'Pizza', 'Breakfast & Brunch', 'French'];

    return (
      <div id="config-window" className={handleShowHideModal}>

        <form>
          <h3>Stars</h3>
          <div>
            <Rating updateStars={this.props.updateStars} />
          </div>

          <h3>Category</h3>
          {categories.map((category) => (
            <div
              className="formrow"
              key={category}
            >
              <input
                className="checkbox"
                type="checkbox"
                name="check"
                id="check"
                onChange={(e) => this.props.updateCategory(category, e.target.checked)}
              />
              <label className="checklabel" htmlFor="check1">{category}</label>
            </div>
          ))}

          <h3>Open Now</h3>
          <div>
            <label className="switch">
              <input type="checkbox" onClick={this.handleSwitch} />
              <span className="slider round" />
            </label>
            {isOnLabel}
          </div>

          {/* rename styling for these buttons */}
          <div className="btn-signup-form-wrapper1">
            <button
              type="button"
              className="btn-signup-form"
              onClick={this.context.hideModalForConfigWindow}
            >
              All set!
              </button>
          </div>

          <div className="btn-signup-form-wrapper2">
            <button
              type="button"
              className="btn-signup-form"
              onClick={() => this.props.handleNeverMind()}
            >
              Never mind
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ConfigIcon;
