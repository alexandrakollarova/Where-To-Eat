import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from './Footer';
import Funnels from './Funnels';
import SignupForm from '../SignupForm/SignupForm';
import '../Header/Header.css';
import {NavLink} from 'react-router-dom';

class LandingMain extends Component {    
       
    render() {        
        return ( 
            <div>
                <Header />

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
                        to='/demo-page'
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