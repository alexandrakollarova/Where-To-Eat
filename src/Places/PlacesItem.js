import React, { Component } from 'react';

class PlacesItem extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className='restaurant-card-item'>
                    <p>{this.props.name}</p>
                </div>
            </>
         );
    }
}
 
export default PlacesItem;