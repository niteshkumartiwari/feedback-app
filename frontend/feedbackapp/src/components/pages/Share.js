import React, { Component, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./css/Share.css";

import toast from "react-simple-toasts";

class Share extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const type = this.props.type;
    const link = this.props.link;

    return (
      <div className="share_form">
        <Card sx={{ maxWidth: 800 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="/images/done.jpg"
              alt="Well Done!"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Congratulations!!!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You have successfully created the {type}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              sx={{ textTransform: "lowercase" }}
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast("Copied Link to Clipboard!");
              }}
            >
              {link}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Share;
