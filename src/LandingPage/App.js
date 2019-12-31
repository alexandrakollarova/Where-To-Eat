import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppContext from '../AppContext';
import './App.css';
import LandingMain from './LandingMain';
import DemoPage from '../DemoPage/DemoPage';
import SearchPlaces from '../HomePage/SearchPlaces';
import PageNotFound from './PageNotFound';
import config from '../config';
import MyCollectionList from '../SavedPlaces/MyCollectionList';
import TokenService from '../services/token-service';
import DemoSearchPlaces from '../DemoPage/DemoSearchPlaces';

class App extends Component {
  state = {
    places: [],
    showSignupForm: false,
    showLoginForm: false,
    showConfigWindow: false,
    showPopup: false,
    isSignedIn: false,
    isMenuActive: false,
    collectionList: [],
    activeUserId: null,
  };

  componentDidMount() {
    this.convertIsOpenValuesToBoolean();
    this.setState({
      activeUserId: TokenService.getAuthToken(),
    });
  }
  createUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
      isSignedIn: true,
    });
  };

  handleUserSignedIn = () => {
    this.setState((prevState) => ({ isSignedIn: !prevState.isSignedIn }));
  };

  showModalForSignupForm = () => {
    this.setState({ showSignupForm: true });
    this.state.showSignupForm && this.setState({ isMenuActive: false });
  };

  hideModalForSignupForm = () => {
    this.setState({ showSignupForm: false });
  };

  showModalForLoginForm = () => {
    this.setState({ showLoginForm: true });
    this.state.showLoginForm && this.setState({ isMenuActive: false });
  };

  hideModalForLoginForm = () => {
    this.setState({ showLoginForm: false });
  };

  showModalForConfigWindow = () => {
    this.setState({ showConfigWindow: true });
  };

  hideModalForConfigWindow = () => {
    this.setState({ showConfigWindow: false });
  };

  showModalForPopup = () => {
    this.setState({ showPopup: true });
  };

  hideModalForPopup = () => {
    this.setState({ showPopup: false });
  };

  updateSearchResults = (filtered) => {
    this.setState({ places: filtered });
  };

  setCollectionList = collectionList => {
    this.setState({ collectionList });
  }

  savePlace = (place) => {
    const businessId = place.id;
    const userId = TokenService.getAuthToken();

    fetch(`${config.API_ENDPOINT}/users_businesses`, {
      method: 'POST',
      body: JSON.stringify({ userId, businessId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
      })
      .then((data) => {
        const newCollectionList = this.state.collectionList.concat([place]);
        this.setState({ collectionList: newCollectionList });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  unsavePlace = (id) => { 
    const businessId = id;
    const userId = TokenService.getAuthToken();

    fetch(`${config.API_ENDPOINT}/users_businesses`, {
      method: 'DELETE',
      body: JSON.stringify({ userId, businessId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        const newCollectionList = this.state.collectionList.filter(
          place => place.id !== id
        );
        this.setState({ collectionList: newCollectionList });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  convertIsOpenValuesToBoolean() {
    this.setState((prevState) => ({
      places: prevState.places.map((p) => {
        if (p.is_open) {
          p.is_open = true;
        } else {
          p.is_open = false;
        }
        return p;
      }),
    }));
  }

  render() {  
    const contextValue = {
      places: this.state.places,
      users: this.state.users,
      showSignupForm: this.state.showSignupForm,
      showConfigWindow: this.state.showConfigWindow,
      showPopup: this.state.showPopup,
      showLoginForm: this.state.showLoginForm,
      isSignedIn: this.state.isSignedIn,
      showModalForConfigWindow: this.showModalForConfigWindow,
      showModalForPopup: this.showModalForPopup,
      showModalForSignupForm: this.showModalForSignupForm,
      hideModalForSignupForm: this.hideModalForSignupForm,
      showModalForLoginForm: this.showModalForLoginForm,
      hideModalForLoginForm: this.hideModalForLoginForm,
      hideModalForConfigWindow: this.hideModalForConfigWindow,
      hideModalForPopup: this.hideModalForPopup,
      createUser: this.createUser,
      updateSearchResults: this.updateSearchResults,
      isMenuActive: this.state.isMenuActive,
      collectionList: this.state.collectionList,
      activeUserId: TokenService.getAuthToken(),
      savePlace: this.savePlace,
      unsavePlace: this.unsavePlace,
      handleUserSignedIn: this.handleUserSignedIn,
      setCollectionList: this.setCollectionList
    };

    return (
      <AppContext.Provider value={contextValue}>
        <Switch>
          <Route exact path="/" render={(routeProps) => {
            return TokenService.hasAuthToken() ? (
              <Redirect to="/my-collection" routeProps={routeProps} />            
              ) : (
                    <LandingMain />
                  )}
            }           
          />

          <Route path="/my-collection" render={(routeProps) => {
            return TokenService.hasAuthToken() ? (
              <MyCollectionList routeProps={routeProps} />
              ) : (
                  <Redirect to="/" />
                )}
            }          
          />

          <Route path="/demo">
            {TokenService.hasAuthToken() ? (
              <Redirect to="/my-collection" />
            ) : (
                <DemoPage />
              )}
          </Route>

          <Route path="/search">
            {TokenService.hasAuthToken() ? (
              <SearchPlaces />
            ) : (
                <Redirect to="/" />
              )}
          </Route>

          <Route path="/demo-search">
            {TokenService.hasAuthToken() ? (
              <Redirect to="/my-collection" />
            ) : (
                <DemoSearchPlaces />
              )}
          </Route>

          <Route component={PageNotFound} />
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default App;
