import React, { Component } from 'react';
import './Places.css';
import AppContext from '../AppContext';

class PlacesItem extends Component {
    static contextType = AppContext;

    state = {
        buttonAddHide: false,
        buttonUndoHide: true
    }

    addPlaceToCollection(index) {        
        this.context.activeButtonIndex = index 

        if (this.context.activeButtonIndex === index) {

            this.setState({ buttonAddHide: true, buttonUndoHide: false  });
            this.context.buttonAddHide = true
            this.context.buttonUndoHide = false
        

            this.context.collectionList.push({
                    id: this.props.id,
                    name: this.props.name,
                    isOpen: this.props.isOpen
            })
        }       
    }

    removePlaceFromCollection(index) {
        this.context.activeButtonIndex = index 

        if (this.context.activeButtonIndex === index) {
            
            this.setState({ buttonAddHide: false, buttonUndoHide: true  });
            this.context.buttonAddHide = false
            this.context.buttonUndoHide = true

            const placeId = this.props.id
            
            const newPlaces = this.context.collectionList.filter(place => place.id !== placeId)   
            this.context.collectionList = newPlaces
        }          
    }


    render() {
        const index = this.props.id

        return ( 
            <>
                <div className='restaurant-card-item'>

                    <div className="image-placeholder">
                        <img src="" alt="temporary-placeholder"></img>
                    </div>
                    <h3 className="place-title">{this.props.name}</h3>

                    {/* fake rating */}
                    <div className="place-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <button
                        id={index}
                        type="button"
                        className="btn-add-place"
                        onClick={() => this.addPlaceToCollection(index)}
                        style={{display: this.context.buttonAddHide && "none"}}
                    >
                        Add
                    </button>

                    <button
                        id={index}
                        type="button"
                        className="btn-add-place"
                        onClick={() => this.removePlaceFromCollection(index)}
                        style={{display: this.context.buttonUndoHide && "none"}}
                    >
                        Undo
                    </button>
                </div>
            </>
         );
    }
}
 
export default PlacesItem;