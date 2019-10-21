import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../Header/Header';
import './DemoPage.css';
import SignupForm from '../SignupForm/SignupForm';

class DemoPage extends Component {
    
    render() { 
        return ( 
            <>
                <Header />

                <SignupForm />

                <main className='main-demo'>
                    <h1 className="headline">Some header</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>

                    <div className='image-wrapper'></div>

                </main>

                <Footer />        
            </>
         );
    }
}
 
export default DemoPage;