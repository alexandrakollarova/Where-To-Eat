import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AppContext from '../AppContext';
import './App.css';
import LandingMain from './LandingMain';
import DemoPage from '../DemoPage/DemoPage';
import SearchPlaces from '../HomePage/SearchPlaces';
import PageNotFound from './PageNotFound';
import places from '../SampleData';
import users from '../SampleData'
import SignupForm from '../SignupForm/SignupForm';
import SignInPage from '../SignInPage/SignInPage'

class App extends Component {
  state = { 
    places: places.places,
    users: users.users,
    showSignupForm: false,
    isSignedIn: false
  }

  cretaeUser = user => {
    this.setState({ 
      users: [...this.state.users, user],
      isSignedIn: true
    });
  } 

  showModal = () => {
    this.setState({ showSignupForm: true });
  }

  hideModal = () => {
      this.setState({ showSignupForm: false });
  }

  updateSearchResults = (filtered) => {
    this.setState({ places: filtered });
  }

  render() {

    const contextValue = {
      places: this.state.places,
      users: this.state.users,
      showSignupForm: this.state.showSignupForm,
      isSignedIn: this.state.isSignedIn,
      showModal: this.showModal,
      hideModal: this.hideModal,
      createUser: this.cretaeUser,
      updateSearchResults: this.updateSearchResults
    }

    return ( 
      <AppContext.Provider value={contextValue}>      
        <Switch>
          
          <Route exact path='/' component={LandingMain} />

          <Route path='/demo-page' component={DemoPage} />

          <Route path='/signup' component={SignupForm} />

          <Route path='/search-places' component={SearchPlaces} />

          <Route component={PageNotFound} />

        </Switch> 
      </AppContext.Provider>
     
     );
  }
}
 
export default App;
