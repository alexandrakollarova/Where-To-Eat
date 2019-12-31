import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from './Footer';
import Funnels from './Funnels';
import SignupForm from '../SignupAndLogin/SignupForm';
import LoginForm from '../SignupAndLogin/LoginForm';
import '../Header/Header.css';
import AppContext from '../AppContext';
import egg from './icons/egg.png';

class LandingMain extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.hideModalForSignupForm()
  }

  render() {
    return (
      <div className="landing-main-container">
        <Header />

        <LoginForm />
        <SignupForm />

        <main className="main-landing">
          <img src={egg} alt="egg-background" className="egg-img" />

          <h1 className="headline">
            Where
            <br />
            to Eat?
          </h1>

          <p>
            Craving something yummy, don't feel like experimenting,
            and nothing comes to your mind?<br />
            Let Where To Eat to help you to solve this once for all.
          </p>

          <NavLink
            to="/demo"
            className="btn-check-it-out"
          >
            CHECK IT OUT
          </NavLink>

          <Funnels />

        </main>

        <Footer />
      </div>
    );
  }
}

export default LandingMain;
