import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import AppContext from '../AppContext';

class MyCollectionItem extends Component {
    static contextType = AppContext;

    removePlaceFromCollection(index) {
        this.context.unsavePlace(index);  
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
                    
                    <button
                        id={index}
                        type="button"
                        className="btn-add-place"
                        onClick={() => this.removePlaceFromCollection(index)}
                    >
                        Remove
                    </button>
                </div>
            </>
         );
    }
}
 
export default MyCollectionItem;