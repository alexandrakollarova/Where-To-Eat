import React, { Component } from 'react';
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

        return ( 
            <>
                <Header />

                <h1>Welcome {greetUser.username}</h1>
                
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