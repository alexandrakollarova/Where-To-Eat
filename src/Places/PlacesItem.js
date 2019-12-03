import React, { Component } from 'react';
import './Places.css';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';
import StarRatings from 'react-star-ratings';

class PlacesItem extends Component {
    static contextType = AppContext;

    isSaved(id) {
        return !!this.context.collectionList.find(place => place.id === id);
    }

    render() {  
        let myProps = {
            id: this.props.id,
            name: this.props.name,
            rating: this.props.rating,
            isClosed: this.props.isClosed,
        }
        
        return ( 
            <>
                <div className='restaurant-card-item'>

                    <div className="image-placeholder">
                        <img src={this.props.img} alt="restaurant" className="restaurant-image"></img>
                    </div>
                    <h3 className="place-title">{this.props.name}</h3>

                    <div className="place-rating">
                        <StarRatings
                            rating={this.props.rating}
                            starRatedColor="yellow"
                            starEmptyColor="grey"
                            starDimension="20px"
                            starHoverColor="yellow"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>  

                    <div className="place-is-open">
                        <p>{this.props.isClosed ? "Closed Now" : "Open Now"}</p>
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