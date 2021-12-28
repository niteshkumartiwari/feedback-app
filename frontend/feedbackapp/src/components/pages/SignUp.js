import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../App.css";
import { GOOGLE_AUTH_URL } from "../constants";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: "/home",
            state: { from: this.props.location },
          }}
        />
      );
    }

    return (
      <div className="signup-container">
        <div className="signup-content">
          <h1 className="signup-title">Signup with Feedloop</h1>
          <SocialSignup />
        </div>
      </div>
    );
  }
}

class SocialSignup extends Component {
  render() {
    return (
      <div className="social-signup">
        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
          <img src="/images/google-logo.png" alt="Google" /> Sign up with Google
        </a>
      </div>
    );
  }
}

export default SignUp;
