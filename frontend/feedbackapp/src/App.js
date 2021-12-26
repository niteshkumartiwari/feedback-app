import React, { Component } from "react";
import "./App.css";
import { ACCESS_TOKEN } from "./components/constants";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import SignUp from "./components/pages/SignUp";
import { getCurrentUser } from "./components/apis/User";
import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    return (
      <>
        <Router>
          <Navbar
            authenticated={this.state.authenticated}
            onLogout={this.handleLogout}
            {...this.props}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/sign-up"
              render={(props) => (
                <SignUp authenticated={this.state.authenticated} {...props} />
              )}
            />
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
