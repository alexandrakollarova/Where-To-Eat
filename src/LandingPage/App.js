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
import MyCollectionList from '../HomePage/MyCollectionList';

class App extends Component {
  state = { 
    places: places.places,
    users: users.users,
    showSignupForm: false,
    showConfigWindow: false,
    isSignedIn: false,
    isMenuActive: false,
    collectionList: [],
    activeUserId: null,
    demoCollectionList: []
  }

  componentDidUpdate() {
    //this.convertIsOpenValuesToBoolean()
  }

  convertIsOpenValuesToBoolean() {
    let modifiedPlaces = this.state.places.map(p => p.is_open == 1 
      ? p.is_open = true : p.is_open = false)
    this.setState({ places: modifiedPlaces });
  }

  cretaeUser = user => {
    this.setState({ 
      users: [...this.state.users, user],
      activeUserId: user.user_id,
      isSignedIn: true
    });
  } 

  showModalForSignupForm = () => { 
    this.setState({ showSignupForm: true })
    this.state.showSignupForm && this.setState({ isMenuActive: false });
  }

  hideModalForSignupForm = () => { 
    this.setState({ showSignupForm: false }) 
  }

  showModalForConfigWindow = () => {
    this.setState({ showConfigWindow: true })
  }

  hideModalForConfigWindow = () => {
    this.setState({ showConfigWindow: false })
  }

  updateSearchResults = (filtered) => { 
    this.setState({ places: filtered }) 
  }

  savePlace = (place) => {
    const newCollectionList = this.state.collectionList.concat([place])
    this.setState({ collectionList: newCollectionList })
  }

  unsavePlace = (id) => {
      const newCollectionList = this.state.collectionList.filter(place => place.id !== id);
      this.setState({ collectionList: newCollectionList })
  }

  render() {
    const contextValue = {
      places: this.state.places,
      users: this.state.users,
      showSignupForm: this.state.showSignupForm,
      showConfigWindow: this.state.showConfigWindow,
      isSignedIn: this.state.isSignedIn,
      showModalForConfigWindow: this.showModalForConfigWindow,
      showModalForSignupForm: this.showModalForSignupForm,
      hideModalForSignupForm: this.hideModalForSignupForm,
      hideModalForConfigWindow: this.hideModalForConfigWindow,
      createUser: this.cretaeUser,
      updateSearchResults: this.updateSearchResults,
      isMenuActive: this.state.isMenuActive,
      collectionList: this.state.collectionList,
      activeUserId: this.state.activeUserId,
      savePlace: this.savePlace,
      unsavePlace: this.unsavePlace,
      demoCollectionList: this.state.demoCollectionList
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

          <Route path='/demo-page'>
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
