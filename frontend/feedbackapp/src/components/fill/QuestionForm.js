import { IconButton, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import { QuestionAnswerOutlined } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloseIcon from "@material-ui/icons/Close";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BsTrash } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { doHttpRequest } from "../apis/User";
import { FILL_FORM_URL } from "../constants";
import Share from "../pages/Share";
import "./css/QuestionForm.css";

function QuestionForm(props) {
  const questions = props.form.questions;

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
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
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
            </div>
          </div>

          {typeof questions !== "undefined" && questions != null ? (
            <div>{questionsUI()}</div>
          ) : (
            ""
          )}

          <div className="save_form">
            <Button
              variant="contained"
              color="primary"
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
