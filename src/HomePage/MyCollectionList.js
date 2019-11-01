import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Places/Places.css';
import AppContext from '../AppContext';
import MyCollectionItem from './MyCollectionItem';
import Header from '../Header/Header';

class MyCollectionList extends Component {
    static contextType = AppContext;

    render() {

        const greetUser = this.context.users.find(user =>
            user.user_id === this.context.activeUserId
            )
        const user = greetUser.username.charAt(0).toUpperCase() + greetUser.username.slice(1)

        return (
            <>
                <Header />

                <h1 className="headline-welcome">Welcome 
                    <br />{user},</h1>

                <p className="discover-places-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>

                <Link
                    type="button"
                    className="btn-discover-places"
                    to='/search-places'                    
                >
                    Discover restaurants
                </Link>
                
                {this.context.collectionList.map(place =>
                    <MyCollectionItem
                        key={place.id}
                        id={place.id}
                        name={place.name}
                        isOpen={place.isOpen}
                    />
                )}
            </>
         );
    }
}
 
export default MyCollectionList;