import React, { Component } from 'react';
import './DemoPage.css';
import SignupForm from '../SignupAndLogin/SignupForm';
import AppContext from '../AppContext';
import DemoCollectionList from './DemoCollectionList';
import LoginForm from '../SignupAndLogin/LoginForm';

class DemoPage extends Component {
    static contextType = AppContext;

    componentDidMount() {
        this.context.hideModalForSignupForm()
    }
    
    render() {              
        return ( 
            <>
                <LoginForm />
                <SignupForm /> 
                <DemoCollectionList />
            </>
         );
    }
}
 
export default DemoPage;