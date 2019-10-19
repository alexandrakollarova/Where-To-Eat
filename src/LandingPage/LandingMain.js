import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Funnels from './Funnels';
import AppContext from '../AppContext'
import SignupForm from '../Signup Form/SignupForm';

class LandingMain extends Component {
    state = { 
        showSignupForm: false
    }

    showModal = () => {
        this.setState({ showSignupForm: true });
    }
    
    hideModal = () => {
        this.setState({ showSignupForm: false });
    }
    
    render() { 
        const contextValue = {
            showSignupForm: this.state.showSignupForm,
            showModal: this.showModal
        }

        return ( 
            <div>
                <AppContext.Provider value={contextValue}>
                    <Header />

                    <SignupForm showSignupForm={this.state.showSignupForm} handleCancel={this.hideModal} />

                    <main>
                        <div className="headline">
                            <h1>Where To Eat?</h1>
                            <img src="" alt="hero_image"/>

                            <p>
                                Craving something yummy, don't feel like experimenting, 
                                and nothing comes to your mind?
                                Let Where To Eat to help you to solve this once for all. 
                            </p>
                        
                            <button>Check it out</button>
                        </div>

                        <Funnels />

                    </main>
                </AppContext.Provider>

                <Footer />
            </div>
         );
    }
}
 
export default LandingMain;