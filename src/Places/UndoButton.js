import React, { Component } from 'react';
import AppContext from '../AppContext';

class UndoButton extends Component {
    static contextType = AppContext;

    state = { placeAdded: true }

    removePlaceFromCollection(index) {
        this.context.activeButtonIndex = index 

        this.setState({ placeAdded: false })          

        const placeId = this.props.id
          
        const newPlaces = this.context.collectionList.filter(place => place.id !== placeId)   
        this.context.collectionList = newPlaces                 
    }
    

    render() { 
        const index = this.props.id

        !this.state.placeAdded && this.props.buttonClicked(index, this.state.placeAdded)
        
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