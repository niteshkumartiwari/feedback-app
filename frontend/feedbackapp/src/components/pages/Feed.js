import React, { Component } from "react";
import Post from "./Post";
import PostForm from "./PostForm"

class Feed extends Component {
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
    const posts = this.state.posts.map((post, index) => (
      <Post key={index} value={post} />
    ));
    return (
      <div className="feed">
        {posts}
        <PostForm onSubmit={this.handleNewPost} />
      </div>
    );
  }
}

export default Feed;
