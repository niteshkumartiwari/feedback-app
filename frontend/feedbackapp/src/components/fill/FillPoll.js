import React, { Component } from "react";
import { doHttpRequest } from "../apis/User";
import { FILL_POLL_PATH } from "../constants";
import CenteredPolltabs from "../poll/CenteredPolltabs";
import "./css/FillPoll.css";
import QuestionPoll from "./QuestionPoll";

export class FillPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      formId: this.props.location.pathname.split("/")[3],
    };

    this.getForm = this.getForm.bind(this);
  }

  componentDidMount() {
    this.getForm();
  }

  async getForm() {
    const response = await doHttpRequest(
      FILL_POLL_PATH + "/" + this.state.formId,
      "GET",
      {}
    );
    this.setState({ form: response });
  }

  render() {
    return (
      <div>
        <CenteredPolltabs label="Poll" />
        {!!this.state.form ? <QuestionPoll form={this.state.form} /> : ""}
      </div>
    );
  }
}

export default FillPoll;
