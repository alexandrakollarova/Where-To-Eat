import React, { Component } from 'react';
import AppContext from '../AppContext';
import PlacesItem from './PlacesItem'

class PlacesList extends Component {
    static contextType = AppContext;

    render() { 
        return ( 
            <>
                {this.context.places.map(place => 
                    <PlacesItem 
                        key={place.business_id}
                        id={place.business_id}
                        name={place.name}
                        isOpen={place.is_open}
                    />
                )}
            </>
        );
    }
}
 
export default PlacesList;