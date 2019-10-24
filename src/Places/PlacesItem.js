import React, { Component } from 'react';
import './Places.css';
import AppContext from '../AppContext';

class PlacesItem extends Component {
    static contextType = AppContext;

    state = {
        buttonAddHide: false,
        buttonUndoHide: true
    }

    addPlaceToCollection = () => {
        this.setState({ buttonAddHide: true, buttonUndoHide: false })

        this.context.collectionList.push({
                id: this.props.id,
                name: this.props.name,
                isOpen: this.props.isOpen
        })
    }

    removePlaceFromCollection = () => {
        this.setState({ buttonAddHide: false, buttonUndoHide: true })

        const placeId = this.props.id

        this.context.collectionList.filter(place => place.id !== placeId)        
    }

    render() {console.log(this.context.collectionList)
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
                        type="button"
                        className="btn-add-place"
                        onClick={this.addPlaceToCollection}
                        style={{display: this.state.buttonAddHide && "none"}}
                    >
                        Add
                    </button>

                    <button
                        type="button"
                        className="btn-add-place"
                        onClick={this.removePlaceFromCollection}
                        style={{display: this.state.buttonUndoHide && "none"}}
                    >
                        Undo
                    </button>
                </div>
            </>
         );
    }
}
 
export default PlacesItem;