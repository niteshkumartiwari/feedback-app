import React, { Component } from "react";

class UserHome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <>
        <h1>User-Home for {this.props.currentUser.name} </h1>
      </>
    );
  }
}

export default UserHome;
