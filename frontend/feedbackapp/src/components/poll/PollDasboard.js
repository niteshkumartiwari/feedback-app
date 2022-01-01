import React, { Component } from "react";

import { doHttpRequest } from "../apis/User";
import { VIEW_POLL_PATH } from "../constants";
import CenteredPolltabs from "../poll/CenteredPolltabs";
import BuildDasboard from "./BuildDasboard";

class PollDasboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: {},
      pollId: this.props.location.pathname.split("/")[3],
    };

    this.getPoll = this.getPoll.bind(this);
    this.preprocess = this.preprocess.bind(this);
  }

  componentDidMount() {
    this.getPoll();
  }

  async preprocess(poll) {
    let data = [];
    const options = poll.options;
    const optionCount = poll.optionCounts;

    options.map((option, i) => {
      data.push({ name: option, Choice: optionCount[i] });
    });

    let newPoll = {
      pollTitle: poll.pollTitle,
      pollDescription: poll.pollDescription,
      questionText: poll.questionText,
      data: data,
    };
    return newPoll;
  }

  async getPoll() {
    const response = await doHttpRequest(
      VIEW_POLL_PATH + "/" + this.state.pollId,
      "GET",
      {}
    );
    const data = await this.preprocess(response);
    this.setState({ poll: data });
  }

  render() {
    return (
      <div>
        <CenteredPolltabs label="Poll-Dashboard" />
        {!!this.state.poll ? <BuildDasboard poll={this.state.poll} /> : ""}
      </div>
    );
  }
}

export default PollDasboard;
