import React, { Component } from 'react';
import './Places.css';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';

class PlacesItem extends Component {
    static contextType = AppContext;

    isSaved(id) {
        return !!this.context.collectionList.find(place => place.id === id);
    }

    render() {  
        let myProps = {
            id: this.props.id,
            name: this.props.name,
            isOpen: this.props.isOpen,
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

                    {this.isSaved(this.props.id)
                        ? <UndoButton {...myProps} />
                        : <AddButton {...myProps} /> 
                    }               
                    
                </div>
            </>
         );
    }
}
 
export default PlacesItem;