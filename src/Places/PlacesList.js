import React, { Component } from 'react';
import AppContext from '../AppContext';
import PlacesItem from './PlacesItem'

class PlacesList extends Component {
    static contextType = AppContext;

    render() { 
        return ( 
            <>
                {this.props.places.map(place => 
                    <PlacesItem 
                        key={place.id}
                        id={place.id}
                        name={place.name}
                        isClosed={place.is_closed}
                        rating={place.rating}
                        added={place.added}
                        img={place.image_url}
                    />
                )}
            </>
        );
    }
}
 
export default PlacesList;