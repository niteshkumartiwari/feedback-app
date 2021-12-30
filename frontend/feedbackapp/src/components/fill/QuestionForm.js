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

function QuestionForm(props) {
  const questions = props.form.questions;
  const [IsSubmit, setSubmit] = useState(false);
  let id = uuidv4();

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

  async function commitToDB() {
    const response = await doHttpRequest(SUBMIT_FORM, "POST", {
      client_id: id,
    });

    setSubmit(true);
  }

  return (
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
                />

                <InputLabel sx={{ paddingTop: "20px" }}>
                  For which interaction you want to provide feedback?
                </InputLabel>
                <Input id="component-simple" />
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
            <Input id="component-simple" />
          </div>

          <div className="save_form">
            <Button
              variant="contained"
              color="primary"
              onClick={commitToDB}
              style={{ fontSize: "14px" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
