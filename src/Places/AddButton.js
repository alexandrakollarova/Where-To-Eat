import React, { Component } from 'react';
import AppContext from '../AppContext';

class AddButton extends Component {
    static contextType = AppContext;

    state = { placeAdded: false }

    componentDidUpdate() {
        const index = this.props.id
        this.state.placeAdded && this.props.buttonClicked(index, this.state.placeAdded)
        console.log()
    }
    
    addPlaceToCollection(index) {        
        this.context.activeButtonIndex = index 

        this.setState({ placeAdded: true })

        this.context.collectionList.push({
            id: index,
            name: this.props.name,
            isOpen: this.props.isOpen
        })       
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