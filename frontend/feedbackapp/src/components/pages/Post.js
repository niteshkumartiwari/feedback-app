import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./css/Post.css";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia
            component="img"
            alt="form-img"
            height="140"
            image="/images/form.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                letterSpacing: ".1px",
                lineHeight: "24px",
                paddingBottom: "8px",
                fontFamily: "sans-serif",
              }}
            >
              Form-Name
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              Form Discription
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              Mark has given a feedback
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
        {/* <span className="content">{this.props.value.content}</span> */}
      </div>
    );
  }
}

export default Post;
