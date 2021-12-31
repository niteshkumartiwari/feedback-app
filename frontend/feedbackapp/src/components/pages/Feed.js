import React, { Component } from "react";
import Post from "./Post";
import "./css/Feed.css";
import { Divider, Pagination } from "@mui/material";
import Chip from "@mui/material/Chip";
import { doHttpRequest } from "../apis/User";
import { GET_USER_FEED } from "../constants";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      currentPage: 0,
      postPerPage: 2,
      totalPages: 0,
    };

    this.getFeed = this.getFeed.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.getFeedModified = this.getFeedModified.bind(this);
  }

  componentDidMount() {
    this.getFeed();
  }

  handlePagination(event, targetPageNumber) {
    console.log(targetPageNumber);
    // this.setState({ currentPage: targetPageNumber });
    this.getFeedModified(targetPageNumber);
  }

  async getFeedModified(targetPageNumber) {
    this.setState({ loading: true });
    const FEED_PATH =
      GET_USER_FEED +
      "?page=" +
      (targetPageNumber - 1) +
      "&size=" +
      this.state.postPerPage;

    const response = await doHttpRequest(FEED_PATH, "GET", {});

    this.setState({
      posts: response.posts,
      totalPages: response.totalPages - 1,
    });
    this.setState({ loading: false });
  }

  async getFeed() {
    this.setState({ loading: true });
    const FEED_PATH =
      GET_USER_FEED +
      "?page=" +
      this.state.currentPage +
      "&size=" +
      this.state.postPerPage;

    const response = await doHttpRequest(FEED_PATH, "GET", {});

    this.setState({
      posts: response.posts,
      totalPages: response.totalPages - 1,
    });
    this.setState({ loading: false });
  }

  render() {
    const posts = this.state.posts.map((post, index) => (
      <Post key={index} post={post} />
    ));
    return (
      <div className="feed">
        <Divider style={{ justifyContent: "center", paddingRight: "5%" }}>
          <Chip label="Recent Feeds" />
        </Divider>
        {posts}
        <div className="pagination">
          <Pagination
            count={this.state.totalPages + 1}
            page={this.state.currentPage}
            onChange={this.handlePagination}
          />
        </div>
      </div>
    );
  }
}

export default Feed;
