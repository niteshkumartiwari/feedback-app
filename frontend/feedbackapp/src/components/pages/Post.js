import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./css/Post.css";
import { Link } from "react-router-dom";
import { VIEW_FORM_SUBMISSION } from "../constants";

class Post extends Component {
  constructor(props) {
    super(props);
  }

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
              {this.props.post.formName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              {this.props.post.formDescription}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              {this.props.post.submittedBy} has given a feedback
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button
              size="small"
              component={Link}
              to={VIEW_FORM_SUBMISSION + "/" + this.props.post.submissionId}
            >
              View
            </Button>
          </CardActions>
        </Card>
        {/* <span className="content">{this.props.value.content}</span> */}
      </div>
    );
  }
}

export default Post;
