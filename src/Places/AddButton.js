import React, { Component } from 'react';
import AppContext from '../AppContext';

class AddButton extends Component {
    static contextType = AppContext;

    addPlaceToCollection(index) {
        const placeToAdd = {
            id: index,
            name: this.props.name,
            isOpen: this.props.isOpen,
        }

        this.context.savePlace(placeToAdd);
    }

    render() { 
        const index = this.props.id

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