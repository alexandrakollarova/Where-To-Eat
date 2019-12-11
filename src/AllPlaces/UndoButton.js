import React, { Component } from 'react';
import AppContext from '../AppContext';

class UndoButton extends Component {
  static contextType = AppContext;

  removePlaceFromCollection(index) {
    this.context.unsavePlace(index);
  }


  render() {
    const index = this.props.id

    return (
      <button
        id={index}
        type="button"
        className="btn-add-place"
        onClick={() => this.removePlaceFromCollection(index)}
      >
        Undo
            </button>
    );
  }
}

export default UndoButton;