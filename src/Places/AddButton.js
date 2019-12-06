import React, { Component } from 'react';
import AppContext from '../AppContext';

class AddButton extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  addPlaceToCollection(index) {
    const { name, isClosed, rating } = this.props;
    const { savePlace } = this.context;

    const placeToAdd = {
      id: index,
      name,
      isClosed,
      rating,
    };

    savePlace(placeToAdd);
  }

  render() {
    const index = this.props.id;

    return (
      <button
        id={index}
        type="button"
        className="btn-add-place"
        onClick={() => this.addPlaceToCollection(index)}
      >
        Add
      </button>
    );
  }
}

export default AddButton;
