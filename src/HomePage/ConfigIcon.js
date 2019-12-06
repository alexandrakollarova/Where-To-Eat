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
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }),
    () => this.props.updateIsOpen(this.state.isOn));
  }

  render() {
    const { showConfigWindow } = this.context;
    const handleShowHideModal = showConfigWindow ? 'display-block' : 'display-none';

    // eslint-disable-next-line react/destructuring-assignment
    const isOnLabel = this.state.isOn ? 'YES' : 'NO';

    const categories = [
      'American',
      'Italian',
      'Indian',
      'Chinese',
      'Japanese',
      'Asian',
      'Korean',
      'Mexican',
      'Seafood',
      'Sushi',
      'Spanish',
      'Sandwiches',
      'Pizza',
      'Breakfast & Brunch',
      'French',
      'Mediterranean',
      'Bakeries',
      'Barbeque',
    ];

    return (
      <div id="config-window" className={handleShowHideModal}>

        <form>
          <h3>Stars</h3>
          <div>
            {/* eslint-disable-next-line react/destructuring-assignment */}
            <Rating updateStars={this.props.updateStars} />
          </div>

          <h3>Category</h3>
          {categories.map((category) => (
            <label className="category-label" key={category}>
              <input
                type="checkbox"
                name=""
                value=""
                className="category-inputs"
                onChange={(e) => this.props.updateCategory(category, e.target.checked)}
              />
              <span>{category}</span>
            </label>
          ))}

          <h3>Open Now</h3>
          <div className="open-now-container">
            <label className="switch">
              <input type="checkbox" onClick={this.handleSwitch} />
              <span className="slider round" />
            </label>
            <h4>{isOnLabel}</h4>
          </div>

          {/* rename styling for these buttons */}
          <div className="btn-signup-form-wrapper1">
            <button
              type="button"
              className="btn-all-set"
              // eslint-disable-next-line react/destructuring-assignment
              onClick={this.context.hideModalForConfigWindow}
            >
              All set!
            </button>
          </div>

          <div className="btn-signup-form-wrapper2">
            <button
              type="button"
              className="btn-never-mind"
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


 {/* <div
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
            </div> */}