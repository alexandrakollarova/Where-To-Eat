import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Places/Places.css';
import AppContext from '../AppContext';
import MyCollectionItem from './MyCollectionItem';
import Header from '../Header/Header';
import Carousel from "nuka-carousel";
import './Carousel.css'

class MyCollectionList extends Component {
    static contextType = AppContext;
    
    constructor() {
        super(...arguments);
        this.state = {
          slideIndex: 0,
          length: 100,
          wrapAround: false,
          slidesToShow: 1,
          cellAlign: "left",
          transitionMode: "scroll",
          withoutControls: false
        };
    }

    render() {
        // const greetUser = this.context.users.find(user =>
        //     user.user_id === this.context.activeUserId
        //     )
        // const user = greetUser.username.charAt(0).toUpperCase() + greetUser.username.slice(1)

        return (
            <>
                <Header />

                {this.context.collectionList.length == 0 &&
                    <>
                        {/* <h1 className="headline-welcome">Welcome 
                            <br />{user},</h1> */}

                        <p className="discover-places-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    
                        <Link
                            type="button"
                            className="btn-discover-places"
                            to='/search'                    
                        >
                            Discover restaurants
                        </Link>
                    </>
                }
                {/* temporary header */}
                {this.context.collectionList.length > 0 &&               
                    <>            
                        <h1>My places</h1>
                        <Link to="/search">Go Back</Link>
                    </>
                }

                <Carousel
                    withoutControls={this.state.withoutControls}
                    transitionMode={this.state.transitionMode}
                    cellAlign={this.state.cellAlign}
                    slidesToShow={this.state.slidesToShow}
                    wrapAround={this.state.wrapAround}
                    slideIndex={this.state.slideIndex}
                >
                    {this.context.collectionList.slice(0, this.state.length).map((place, index) => (
                        <MyCollectionItem
                            key={place.id}
                            id={place.id}
                            name={place.name}
                            isClosed={place.isClosed}
                            rating={place.rating}
                            onClick={this.handleImageClick}
                        />
                    ))}
                </Carousel>
                
                {/* {this.context.collectionList.map(place =>
                    <MyCollectionItem
                        key={place.id}
                        id={place.id}
                        name={place.name}
                        isClosed={place.isClosed}
                        rating={place.rating}
                    />
                )} */}
            </>
         );
    }
}
 
export default MyCollectionList;