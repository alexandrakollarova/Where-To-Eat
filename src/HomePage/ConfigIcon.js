import React, { Component } from 'react';
import AppContext from '../AppContext';
import './ConfigIcon.css';
import Rating from './Rating';

class ConfigIcon extends Component {
  static contextType = AppContext;

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

        <form className="form-config-window">
          <h3>Stars</h3>
          <div>
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
              <span className="slider-open-now round" />
            </label>
            <h4>{isOnLabel}</h4>
          </div>

          <div className="btn-forms-wrapper-left">
            <button
              type="button"
              className="btn-all-set"
              onClick={this.context.hideModalForConfigWindow}
            >
              All set!
            </button>
          </div>

          <div className="btn-forms-wrapper-right">
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