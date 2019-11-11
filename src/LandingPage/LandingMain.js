import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from './Footer';
import Funnels from './Funnels';
import SignupForm from '../SignupAndLogin/SignupForm';
import LoginForm from '../SignupAndLogin/LoginForm';
import '../Header/Header.css';
import {NavLink} from 'react-router-dom';
import AppContext from '../AppContext';

class LandingMain extends Component { 
    static contextType = AppContext;
    
    componentDidMount() {
        this.context.hideModalForSignupForm()
    }

    render() {       
        return ( 
            <div>
                <Header />

                <LoginForm />
                <SignupForm />

                <main className="main-landing">
                    <h1 className="headline">
                        Where 
                        <br />
                        to eat?
                    </h1>

                    <p>
                        Craving something yummy, don't feel like experimenting, 
                        and nothing comes to your mind?
                        Let Where To Eat to help you to solve this once for all. 
                    </p>
                        
                    <NavLink 
                        to='/demo'
                        className="btn-check-it-out"
                    >
                        Check it out
                    </NavLink>
        
                    <Funnels />

                </main>

                <Footer />
            </div>
         );
    }
}
 
export default LandingMain;