import React, { Component } from "react";
import "./css/ProfileFeed.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Link from "@mui/material/Link";

export class ProfileFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { content: "This is my first post!" },
        { content: "This is my second post!" },
      ],
    };

    this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewPost(post) {
    this.setState({
      posts: this.state.posts.concat([post]),
    });
  }

  render() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

    return (
      <div className="profile_feed">
        <Grid container spacing={10}>
          <Grid item key={0}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "100px",
              }}
            >
              Recent Forms
            </Typography>
            <Paper sx={{ height: 500, width: 300 }} elevation={24}>
              <div className="list_form">
                <Link href="#">Form-Name-1</Link>
                <Link href="#">Form-Name-2</Link>
              </div>
            </Paper>
          </Grid>
          <Grid item key={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "100px",
              }}
            >
              Recent Polls
            </Typography>
            <Paper sx={{ height: 500, width: 300 }} elevation={24}>
              <div className="list_form">
                <Link href="#">Poll-Name-1</Link>
                <Link href="#">Poll-Name-2</Link>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProfileFeed;
