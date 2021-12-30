import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./css/ThankYou.css";

import toast from "react-simple-toasts";

class ThankYou extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="share_form">
        <Card sx={{ maxWidth: 3000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="/images/thankyou.jpg"
              alt="Well Done!"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Thank you!!!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You have successfully submitted the {this.props.type}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default ThankYou;
