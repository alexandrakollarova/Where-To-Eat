import React, { Component } from 'react';

class MyCollectionItem extends Component {
    state = {  }
    render() { 
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

                    {this.props.isOpen == 1 && <h5>Open Now</h5>}

                </div>
            </>
         );
    }
}
 
export default MyCollectionItem;