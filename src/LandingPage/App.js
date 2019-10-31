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
// import SignupForm from '../SignupForm/SignupForm';
// import SignInPage from '../SignInPage/SignInPage';
import MyCollectionList from '../HomePage/MyCollectionList';

class App extends Component {
  state = { 
    places: places.places,
    users: users.users,
    showSignupForm: false,
    isSignedIn: false,
    isMenuActive: false,
    collectionList: [],
    activeUserId: null,
    // buttonAddHide: false,
    // buttonUndoHide: true,
    activeButtonIndex: null,
    placeAdded: null
  }

  cretaeUser = user => {
    this.setState({ 
      users: [...this.state.users, user],
      activeUserId: user.user_id,
      isSignedIn: true
    });
  } 

  showModal = () => { 
    this.setState({ 
      showSignupForm: true,
    })
    this.state.showSignupForm && this.setState({ isMenuActive: false });
  }

  hideModal = () => {this.setState({ showSignupForm: false })}

  updateSearchResults = (filtered) => {this.setState({ places: filtered })}

  render() {

    const contextValue = {
      places: this.state.places,
      users: this.state.users,
      showSignupForm: this.state.showSignupForm,
      isSignedIn: this.state.isSignedIn,
      showModal: this.showModal,
      hideModal: this.hideModal,
      createUser: this.cretaeUser,
      updateSearchResults: this.updateSearchResults,
      isMenuActive: this.state.isMenuActive,
      collectionList: this.state.collectionList,
      activeUserId: this.state.activeUserId,
      // buttonUndoHide: this.state.buttonUndoHide,
      // buttonAddHide: this.state.buttonAddHide,
      activeButtonIndex: this.state.activeButtonIndex,
      placeAdded: null
    }
    
    return ( 
      <AppContext.Provider value={contextValue}>      
        <Switch>

          <Route exact path='/'>
            {this.state.isSignedIn 
                ? <Redirect to='/my-collection' /> 
                : <LandingMain />
            }
          </Route>
          
          <Route exact path='/' component={LandingMain} />

          <Route path='/my-collection' component={MyCollectionList} />

          <Route path='/demo-page' routeProps={this.props.value}>
            {this.state.isSignedIn
                ? <Redirect to='/search-places' /> 
                : <DemoPage />
            }
          </Route>

          <Route path='/search-places' component={SearchPlaces} />

          <Route component={PageNotFound} />

        </Switch> 
      </AppContext.Provider>     
     );
  }
}
 
export default App;
