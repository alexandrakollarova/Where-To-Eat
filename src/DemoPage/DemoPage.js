import React, { Component } from 'react';
import './DemoPage.css';
import SignupForm from '../SignupForm/SignupForm';
import AppContext from '../AppContext';
import DemoCollectionList from './DemoCollectionList';
import {Link} from 'react-router-dom';

class DemoPage extends Component {
    static contextType = AppContext;

    componentDidMount() {
        this.context.hideModalForSignupForm()
    }
    
    render() {              
        return ( 
            <>
                <SignupForm /> 
                <DemoCollectionList />
            </>
         );
    }
}
 
export default DemoPage;