import React, { Component } from "react";
import "./css/ProfileFeed.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Link from "@mui/material/Link";
import { FILL_POLL_URL, FILL_FORM_URL } from "../constants";

class ProfileFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component Did mount- ProfileFeed");
  }

  render() {
    console.log("rendering - ProfileFeed");
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
              {this.props.forms.map((item, i) => (
                <div className="list_form">
                  <Link href={FILL_FORM_URL + "/" + item.formId}>
                    {item.formName}
                  </Link>
                </div>
              ))}
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
              {this.props.polls.map((item, i) => (
                <div className="list_form">
                  <Link href={FILL_POLL_URL + "/" + item.pollId}>
                    {item.pollName}
                  </Link>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProfileFeed;
