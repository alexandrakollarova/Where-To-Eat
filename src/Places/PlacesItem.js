import React, { Component } from 'react';
import './Places.css';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';

class PlacesItem extends Component {
    static contextType = AppContext;

    hasPlaceBeenAdded = (id, bool) => {console.log(id, bool)
        if (bool) {
            this.context.collectionList.map(place => 
                ( id === place.id && true))
        }       
        
         return false
    }

    render() {  
        // const placeId = this.props.id   

        let props = {
            id: this.props.id,
            name: this.props.name,
            isOpen: this.props.isOpen,
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

                    {this.hasPlaceBeenAdded
                        ? <AddButton {...props} /> 
                        : <UndoButton {...props} />
                    }               
                    
                </div>
            </>
         );
    }
}
 
export default PlacesItem;