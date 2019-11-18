import React, { Component } from 'react';
import AppContext from '../AppContext';

class AddButton extends Component {
    static contextType = AppContext;

    addPlaceToCollection(index) {     
        const placeToAdd = {
            id: index,
            name: this.props.name,
            isClosed: this.props.isClosed,
            rating: this.props.rating
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