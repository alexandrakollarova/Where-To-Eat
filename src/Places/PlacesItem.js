import React, { Component } from 'react';
import './Places.css';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';

class PlacesItem extends Component {
    static contextType = AppContext;

    state = { placeAdded: false }

    hasPlaceBeenAdded = (id, bool) => { 

        if (bool) {
            this.context.collectionList.map(place => 
                (id === place.id &&   
                    this.setState({ placeAdded: true }),               
                    
                    this.context.places.map(place => 
                        id === place.id && (place.added = true)
                    )
                )
            )
        }              
    }

    render() {  
        // const placeId = this.props.id   

        let myProps = {
            id: this.props.id,
            name: this.props.name,
            isOpen: this.props.isOpen,
            added: this.props.added,
            buttonClicked: this.hasPlaceBeenAdded
        }
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

                    {this.state.placeAdded || this.context.placeAdded
                        ? <UndoButton {...myProps} />
                        : <AddButton {...myProps} /> 
                    }               
                    
                </div>
            </>
         );
    }
}
 
export default PlacesItem;