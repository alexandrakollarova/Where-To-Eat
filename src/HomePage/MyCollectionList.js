import React, { Component } from 'react';
import '../Places/Places.css';
import AppContext from '../AppContext';
import MyCollectionItem from './MyCollectionItem';

class MyCollectionList extends Component {
    static contextType = AppContext;

    render() { 
        return ( 
            <>
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