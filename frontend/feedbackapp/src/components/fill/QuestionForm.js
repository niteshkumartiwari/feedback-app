import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { doHttpRequest } from "../apis/User";
import { SUBMIT_FORM } from "../constants";
import "./css/QuestionForm.css";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { unstable_createChainedFunction } from "@mui/material/node_modules/@mui/utils";
import ThankYou from "./ThankYou";

function QuestionForm(props) {
  const questions = props.form.questions;
  const [IsSubmit, setSubmit] = useState(false);
  const [userName, setUserName] = useState();
  const [meta, setMeta] = useState();
  const [feedback, setFeedback] = useState();
  const [answers, setAnswers] = useState({});
  const [checkedState, setCheckedState] = useState({});
  let id = uuidv4();

  function handleOnChangeCheckBox(questionId, optionsId) {
    let optionStatus = checkedState[questionId];
    if (optionStatus === undefined) {
      optionStatus = new Array(4).fill(false);
    }
    optionStatus[optionsId] = !optionStatus[optionsId];
    checkedState[questionId] = optionStatus;
    addAnswers(questionId, "checkbox");
  }

  function questionsUI() {
    return questions.map((question, i) => (
      <div style={{ marginBottom: "0px" }}>
        <div className="question_boxes">
          <div className="saved_questions">
            <Typography
              style={{
                fontSize: "15px",
                fontWeight: "400",
                letterSpacing: ".1px",
                lineHeight: "24px",
                paddingBottom: "8px",
              }}
            >
              {i + 1}. {question.questionText}
            </Typography>
            {question.options.map((op, j) => (
              <div key={j}>
                <div style={{ display: "flex" }}>
                  <FormControl component="fieldset">
                    {question.questionType === "radio" ? (
                      <RadioGroup name={i}>
                        <FormControlLabel
                          style={{
                            marginLeft: "5px",
                            marginBottom: "5px",
                          }}
                          control={
                            <input
                              name={i}
                              type={question.questionType}
                              color="primary"
                              style={{ marginRight: "3px" }}
                              onClick={() => {
                                addAnswers(i, question.questionType, j);
                              }}
                            />
                          }
                          label={
                            <Typography
                              style={{
                                fontFamily: " Roboto,Arial,sans-serif",
                                fontSize: " 13px",
                                fontWeight: "400",
                                letterSpacing: ".2px",
                                lineHeight: "20px",
                                color: "#202124",
                              }}
                            >
                              {question.options[j].optionText}
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    ) : (
                      [
                        question.questionType === "text" ? (
                          <TextField
                            id="standard-textarea"
                            label="Text"
                            placeholder="Answer here"
                            multiline
                            variant="standard"
                            required={question.required}
                            onChange={(event) => {
                              addAnswers(
                                i,
                                question.questionType,
                                event.target.value
                              );
                            }}
                          />
                        ) : (
                          <FormControlLabel
                            style={{
                              marginLeft: "5px",
                              marginBottom: "5px",
                            }}
                            control={
                              <input
                                type={question.questionType}
                                color="primary"
                                style={{ marginRight: "3px" }}
                                required={question.required}
                                onChange={() => handleOnChangeCheckBox(i, j)}
                              />
                            }
                            label={
                              <Typography
                                style={{
                                  fontFamily: " Roboto,Arial,sans-serif",
                                  fontSize: " 13px",
                                  fontWeight: "400",
                                  letterSpacing: ".2px",
                                  lineHeight: "20px",
                                  color: "#202124",
                                }}
                              >
                                {question.options[j].optionText}
                              </Typography>
                            }
                          />
                        ),
                      ]
                    )}
                  </FormControl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  }

  function addAnswers(questionId, questionType, answer) {
    let tmp = answers;

    if (questionType === "checkbox") {
      let checkedBool = checkedState[questionId];
      let checkedAns = [];

      checkedBool.map((item, i) => {
        if (item) checkedAns.push(i);
      });

      tmp[questionId] = { type: questionType, answer: checkedAns };
    } else {
      tmp[questionId] = { type: questionType, answer: answer };
    }

    setAnswers(tmp);
  }

  async function commitToDB() {
    await doHttpRequest(SUBMIT_FORM, "POST", {
      form_id: props.form.id,
      client_id: id,
      user_info: {
        userName: userName,
        meta: meta,
      },
      answers: answers,
      feedback: feedback,
    });

    setSubmit(true);
  }

  return IsSubmit ? (
    <ThankYou type="form" />
  ) : (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                value={props.form.document_name}
                disabled
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                value={props.form.doc_desc}
                disabled
              ></input>
              <div className="user_info">
                <Input
                  id="component-simple"
                  sx={{ paddingTop: "20px" }}
                  placeholder="Name(Optional)"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />

                <InputLabel sx={{ paddingTop: "20px" }}>
                  For which interaction you want to provide feedback?
                </InputLabel>
                <Input
                  id="component-simple"
                  onChange={(event) => {
                    setMeta(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          {typeof questions !== "undefined" && questions != null ? (
            <div>{questionsUI()}</div>
          ) : (
            ""
          )}

          <div className="user_footer">
            <InputLabel sx={{ paddingTop: "20px" }}>
              Anything else you want to add?
            </InputLabel>
            <Input
              id="component-simple"
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
            />
          </div>

          <div className="save_form">
            <Button
              variant="contained"
              color="primary"
              onClick={commitToDB}
              style={{ fontSize: "14px" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
