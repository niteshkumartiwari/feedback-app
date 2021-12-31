import React, { Component } from "react";
import { doHttpRequest } from "../apis/User";
import { VIEW_FORM_SUBMISSION } from "../constants";
import CenteredPolltabs from "../poll/CenteredPolltabs";
import QuestionForm from "./QuestionForm";

class ViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: {},
      submissionId: this.props.location.pathname.split("/")[3],
    };

    this.getSubmission = this.getSubmission.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  componentDidMount() {
    this.getSubmission();
  }

  async getSubmission() {
    const response = await doHttpRequest(
      VIEW_FORM_SUBMISSION + "/" + this.state.submissionId,
      "GET",
      {}
    );
    this.setState({ submission: response });
  }

  isEmpty(obj) {
    for (var i in obj) return false;
    return true;
  }

  render() {
    return (
      <div>
        <CenteredPolltabs label="Form-Submitted" />
        {!this.isEmpty(this.state.submission) ? (
          <QuestionForm form={this.state.submission} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ViewForm;
