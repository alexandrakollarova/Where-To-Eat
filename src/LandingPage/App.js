import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LandingMain from './LandingMain';
import DemoPage from '../DemoPage/DemoPage';
import PageNotFound from './PageNotFound';

class App extends Component {
  state = { 

  }
  
  render() { 
    return (       
      <Switch>
        
        <Route exact path='/' component={LandingMain} />

        <Route path='/demoPage' component={DemoPage} />

        <Route component={PageNotFound} />

      </Switch>      
     );
  }
}
 
export default App;
