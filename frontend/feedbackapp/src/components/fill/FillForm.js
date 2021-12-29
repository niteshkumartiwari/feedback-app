import React, { Component } from "react";
import { doHttpRequest } from "../apis/User";
import { FILL_FORM_PATH } from "../constants";
import CenteredPolltabs from "../poll/CenteredPolltabs";
import "./css/FillForm.css";
import QuestionForm from "./QuestionForm";

class FillForm extends Component {
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
      FILL_FORM_PATH + "/" + this.state.formId,
      "GET",
      {}
    );
    this.setState({ form: response });
  }

  render() {
    return (
      <div>
        <CenteredPolltabs label="Form" />
        {!!this.state.form ? <QuestionForm form={this.state.form} /> : ""}
      </div>
    );
  }
}

export default FillForm;
