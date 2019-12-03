import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppContext from "../AppContext";
import "./App.css";
import LandingMain from "./LandingMain";
import DemoPage from "../DemoPage/DemoPage";
import SearchPlaces from "../HomePage/SearchPlaces";
import PageNotFound from "./PageNotFound";
import config from "../config";
import MyCollectionList from "../HomePage/MyCollectionList";
import TokenService from "../services/token-service";

class App extends Component {
  state = {
    places: [],
    showSignupForm: false,
    showLoginForm: false,
    showConfigWindow: false,
    isSignedIn: false,
    isMenuActive: false,
    collectionList: [],
    activeUserId: null,
    demoCollectionList: []
  };

  componentDidMount() {
    this.convertIsOpenValuesToBoolean();
  }

  convertIsOpenValuesToBoolean() {
    this.setState((prevState, props) => {
      return {
        places: prevState.places.map(p => {
          if (p.is_open) {
            p.is_open = true;
          } else {
            p.is_open = false;
          }
          return p;
        })
      };
    });
  }

  createUser = user => {
    this.setState({
      users: [...this.state.users, user],
      activeUserId: user.user_id,
      isSignedIn: true
    });
  };

  handleUserSignedIn = () => {
    this.setState(prevState => ({ isSignedIn: !prevState.isSignedIn }));
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

  updateSearchResults = filtered => {
    this.setState({ places: filtered });
  };

  savePlace = place => {
    const newCollectionList = this.state.collectionList.concat([place])
    this.setState({ collectionList: newCollectionList })

    let businessId = place.id;
    let userId = TokenService.getAuthToken();

    fetch(`${config.API_ENDPOINT}/users_businesses`, {
      method: "POST",
      body: JSON.stringify({ userId, businessId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {
        // const newCollectionList = this.state.collectionList.concat([place]);
        // this.setState({ collectionList: newCollectionList });
      })
      .catch(error => {
        console.log(error);
      });
  };

  unsavePlace = id => {
    const newCollectionList = this.state.collectionList.filter(place => place.id !== id);
    this.setState({ collectionList: newCollectionList })

    let businessId = id;
    let userId = TokenService.getAuthToken();

    fetch(`${config.API_ENDPOINT}/users_businesses`, {
      method: "DELETE",
      body: JSON.stringify({ userId, businessId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {
        // const newCollectionList = this.state.collectionList.filter(
        //   place => place.id !== id
        //);
        this.setState({ collectionList: newCollectionList });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const contextValue = {
      places: this.state.places,
      users: this.state.users,
      showSignupForm: this.state.showSignupForm,
      showConfigWindow: this.state.showConfigWindow,
      showLoginForm: this.state.showLoginForm,
      isSignedIn: this.state.isSignedIn,
      showModalForConfigWindow: this.showModalForConfigWindow,
      showModalForSignupForm: this.showModalForSignupForm,
      hideModalForSignupForm: this.hideModalForSignupForm,
      showModalForLoginForm: this.showModalForLoginForm,
      hideModalForLoginForm: this.hideModalForLoginForm,
      hideModalForConfigWindow: this.hideModalForConfigWindow,
      createUser: this.createUser,
      updateSearchResults: this.updateSearchResults,
      isMenuActive: this.state.isMenuActive,
      collectionList: this.state.collectionList,
      activeUserId: this.state.activeUserId,
      savePlace: this.savePlace,
      unsavePlace: this.unsavePlace,
      demoCollectionList: this.state.demoCollectionList,
      handleUserSignedIn: this.handleUserSignedIn
    };

    return (
      <AppContext.Provider value={contextValue}>
        <Switch>
          <Route exact path="/">
            {TokenService.hasAuthToken() ? (
              <Redirect to="/my-collection" />
            ) : (
              <LandingMain />
            )}
          </Route>

          {/* <Route exact path='/' component={LandingMain} /> */}

          <Route path="/my-collection">
            {TokenService.hasAuthToken() ? (
              <MyCollectionList />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

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

          <Route component={PageNotFound} />
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default App;
