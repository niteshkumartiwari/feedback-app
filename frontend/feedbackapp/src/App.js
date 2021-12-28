import React, { Component } from "react";
import "./App.css";
import { ACCESS_TOKEN } from "./components/constants";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import SignUp from "./components/pages/SignUp";
import { getCurrentUser } from "./components/apis/User";
import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";
import AppHeader from "./components/AppHeader";
import LoadingIndicator from "./components/LoadingIndicator";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/oauth2/PrivateRoute";
import UserHome from "./components/pages/UserHome";
import Centeredtabs from "./components/form/Centeredtabs";
import QuestionForm from "./components/form/QuestionForm";
import CenteredPolltabs from "./components/poll/CenteredPolltabs";
import Poll from "./components/poll/Poll";
import Share from "./components/pages/Share";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      loading: true,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  updateUser(user) {
    this.setState({
      currentUser: user,
    });
  }

  updateAuth(auth) {
    this.setState({
      isAuthenticated: auth,
    });
  }

  updateLoad(load) {
    this.setState({
      loading: load,
    });
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then((user) => {
        this.updateUser(user);
        this.updateAuth(true);
        this.updateLoad(false);
      })
      .catch((error) => {
        this.updateLoad(false);
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      isAuthenticated: false,
      currentUser: null,
    });
  }

  UNSAFE_componentWillReceiveProps() {
    this.loadCurrentlyLoggedInUser();
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  UNSAFE_componentWillUnmount() {
    console.log("App component Unmounted");
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader
            isAuthenticated={this.state.isAuthenticated}
            onLogout={this.handleLogout}
          />
        </div>
        <div className="app-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute
              path="/profile"
              isAuthenticated={this.state.isAuthenticated}
              currentUser={this.state.currentUser}
              component={Profile}
            ></PrivateRoute>
            <PrivateRoute
              path="/home"
              isAuthenticated={this.state.isAuthenticated}
              currentUser={this.state.currentUser}
              component={UserHome}
            ></PrivateRoute>
            <Route path="/share">
              <Share />
            </Route>
            <Route path="/form">
              <Centeredtabs />
              <QuestionForm />
            </Route>
            <Route path="/poll">
              <CenteredPolltabs />
              <Poll />
            </Route>
            <Route
              path="/sign-up"
              render={(props) => (
                <SignUp
                  isAuthenticated={this.state.isAuthenticated}
                  {...props}
                />
              )}
            />
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
