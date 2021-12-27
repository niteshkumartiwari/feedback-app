import React, { Component } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import "./css/UserHome.css";
import { Link } from "react-router-dom";
import Feed from "./Feed";

class UserHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="parent_class">
        <div className="create_class">
          <div className="create_form">
            <Link to="/form">
              <Fab color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </Link>
            <h2 className="create_text">Create a form</h2>
          </div>
          <br></br>
          <div className="create_poll">
            <Link to="/form">
              <Fab variant="extended" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} />
              </Fab>
            </Link>
            <h2 className="create_text">Create a poll</h2>
          </div>
        </div>
        <div className="feed">
          <Feed/>
        </div>
      </div>
    );
  }
}

export default UserHome;
