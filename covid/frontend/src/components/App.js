import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Navbar from './Navbar';
// import Dashboard from './leads/Dashboard';
import Home from './Home';
import Alerts from './Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import About from './About';
import Testing from './Testing';
import Donate from './Donate';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser()); //Loads the user for the application  
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router> //Allows for having multiple pages within the application 
            <Fragment>
              <Navbar /> //Calls the Navbar component to display the naviagtion page on the application 
              <Alerts /> //Calls the Alert component to display error alerts  
              <div className="container">
                <Switch> 
                  <PrivateRoute exact path="/" component={Home} /> {/* Only accesible to authenticated users */} 
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/testing" component={Testing} />
                  <Route exact path="/donate" component={Donate} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
