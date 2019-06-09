import React, { Component } from "react";
import "./App.css";

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { history } from './history'
import HomeScreen from './containers/HomeScreen.container'
import CalendarScreen from './containers/Calendar.container'
import AboutUsScreen from './containers/AboutUsScreen.container'
import TrainingScreen from './containers/TrainingScreen.container'
import SideBar from './containers/SideBar.container'
import Contacts from './containers/Contacts.container'
import Footer from './components/App/Footer'
import { Transition } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
          <div className="App">
            <div className='main-page'>
              {/* <SideBar /> */}
              <Switch>
                <Route exact path="/Home" component={HomeScreen} />
                <Route exact path="/Calendar" component={CalendarScreen} />
                <Route exact path="/Training" component={TrainingScreen} />
                <Route exact path="/AboutUs" component={AboutUsScreen} />
                <Route exact path="/Contacts" component={Contacts} />
                <Redirect to="/Home" />
              </Switch>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
