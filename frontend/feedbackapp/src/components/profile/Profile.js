import React, { Component } from "react";
import "./css/Profile.css";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ProfileFeed from "./ProfileFeed";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile-container">
        <div className="container">
          <div className="profile-info">
            <div className="profile-avatar">
              {this.props.currentUser.imageUrl ? (
                <img
                  src={this.props.currentUser.imageUrl}
                  alt={this.props.currentUser.name}
                />
              ) : (
                <div className="text-avatar">
                  <span>
                    {this.props.currentUser.name &&
                      this.props.currentUser.name[0]}
                  </span>
                </div>
              )}
            </div>
            <div className="profile-name">
              <h2>{this.props.currentUser.name}</h2>
              <p className="profile-email">{this.props.currentUser.email}</p>
            </div>
          </div>
          <div className="divider">
            <Divider
              style={{
                justifyContent: "center",
                paddingRight: "5%",
                paddingTop: "10px",
              }}
            >
              <Chip label="Your Recent Activities" />
            </Divider>
          </div>
          <div className="profile_feed">
            <ProfileFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
