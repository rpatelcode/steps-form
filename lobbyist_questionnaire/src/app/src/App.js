import "core-js/fn/array/find";
import React, { Component } from "react";
import data from "./data/data";
import { CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: data.questions.find(item => item.id === 1).id, // this is id of question
      forward: [data.questions.find(item => item.id === 1).id], // [questionid] array for forward and backward questionnaire
      answer: [null], // first question answare is null for Start button
      currentQuestion: data.questions.find(item => item.id === 1).desc, // Get the current Question
      yes: data.questions.find(item => item.id === 1).yes, // Yes to radio button
      no: data.questions.find(item => item.id === 1).no, // No to radio button
      answerSelect: 2, // Select answer while click on radio button, First Start button has answer 2, Take you to question #2 at first time.
      count: 0, // Can be use for tabIndex
      radioSelect: null // has been used on Accordions Question case
    };
  }

  previous = () => {
    if (this.state.forward.length) {
      let lastArray = this.state.forward[this.state.forward.length - 2]; // becuase last array is going to delete
      if (lastArray) {
        // this function check last array and then setState everything for previous question
        this.setState({
          id: data.questions.find(item => item.id === lastArray).id,
          forward: [...this.state.forward.slice(0, -1)],
          answer: [...this.state.answer.slice(0, -1)],
          currentQuestion: data.questions.find(item => item.id === lastArray)
            .desc,
          yes: data.questions.find(item => item.id === lastArray).yes,
          no: data.questions.find(item => item.id === lastArray).no,
          answerSelect: this.state.answer[this.state.answer.length - 1], // now, take a last array
          radioSelect: this.state.radioSelect, // to send previous Accordions radio answare which is same.
          count: this.state.count + 1
        });
      }
    }
  };

  handleSubmit = e => {
    // this function is call on click NEXT and START button
    let key = this.state.answerSelect; // Whatever value on radio click assign to key.
    // Send to Question Selection question=>answare { 4=>31, 6=>32, 8=>33 }
    if (
      (key === 4 || key === 6 || key === 8) &&
      this.state.currentQuestion === "Accordions"
    ) {
      switch (key) {
        case 4:
          this.setState({
            id: data.questions.find(item => item.id === 31).id,
            forward: [
              ...this.state.forward,
              data.questions.find(item => item.id === 31).id
            ],
            answer: [...this.state.answer, this.state.answerSelect],
            currentQuestion: data.questions.find(item => item.id === 31).desc,
            yes: data.questions.find(item => item.id === 31).yes,
            no: data.questions.find(item => item.id === 31).no,
            count: this.state.count + 1
          });
          break;
        case 6:
          this.setState({
            id: data.questions.find(item => item.id === 32).id,
            forward: [
              ...this.state.forward,
              data.questions.find(item => item.id === 32).id
            ],
            answer: [...this.state.answer, this.state.answerSelect],
            currentQuestion: data.questions.find(item => item.id === 32).desc,
            yes: data.questions.find(item => item.id === 32).yes,
            no: data.questions.find(item => item.id === 32).no,
            count: this.state.count + 1
          });
          break;
        case 8:
          this.setState({
            id: data.questions.find(item => item.id === 33).id,
            forward: [
              ...this.state.forward,
              data.questions.find(item => item.id === 33).id
            ],
            answer: [...this.state.answer, this.state.answerSelect],
            currentQuestion: data.questions.find(item => item.id === 33).desc,
            yes: data.questions.find(item => item.id === 33).yes,
            no: data.questions.find(item => item.id === 33).no,
            count: this.state.count + 1
          });
          break;
        default:
          break;
      }
    } else {
      this.setState({
        // except case { 4=>31, 6=>32, 8=>33 } all setState.
        id: data.questions.find(item => item.id === key).id,
        forward: [
          ...this.state.forward,
          data.questions.find(item => item.id === key).id
        ],
        answer: [...this.state.answer, this.state.answerSelect],
        currentQuestion: data.questions.find(item => item.id === key).desc,
        yes: data.questions.find(item => item.id === key).yes,
        no: data.questions.find(item => item.id === key).no,
        radioSelect: this.state.radioSelect,
        count: this.state.count + 1
      });
    }
  };

  startOver = () => {
    // this function call on click Start Over button
    this.setState({
      id: data.questions.find(item => item.id === 1).id,
      forward: [data.questions.find(item => item.id === 1).id],
      answer: [2],
      currentQuestion: data.questions.find(item => item.id === 1).desc,
      yes: data.questions.find(item => item.id === 1).yes,
      no: data.questions.find(item => item.id === 1).no,
      answerSelect: 2,
      count: this.state.count + 1
    });
  };

  nextDisabled = () => {
    // this self-executable function disable NEXT button if required.
    if (this.state.currentQuestion === "Accordions") {
      //// If the radio button is not selected on "Accordions" it disables Next button.
      if (this.state.radioSelect === null) {
        return true;
      }
    } else if (
      // If the current question radio button is not select disable the next button
      this.state.answerSelect ===
      this.state.answer[this.state.answer.length - 1]
    ) {
      return true;
    }
  };

  render() {
    const { id, currentQuestion, yes, no, forward } = this.state; // Shorten this.state in typing.
    // Render Previous and Next button
    let previous_next_btn = (
      <React.Fragment>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            aria-describedby="nextsr"
            value="NEXT"
            disabled={this.nextDisabled()}
            onClick={this.handleSubmit}
          />{" "}
          <input
            type="submit"
            className="btn btn-default"
            aria-describedby="previoussr"
            value="PREVIOUS"
            onClick={this.previous}
          />
          <div id="previoussr" hidden>
            Will take you to the previous questionnaire
          </div>
          <div id="nextsr" hidden>
            Will take you to the next questionnaire
          </div>
        </div>
      </React.Fragment>
    );
    // Control buttons
    let buttons_panel;
    if (
      currentQuestion ===
      "Answer this quick and easy interactive questionnaire to find out"
    ) {
      buttons_panel = ( // this is START button comes at first question.
        <React.Fragment>
          <input
            type="submit"
            className="btn btn-primary"
            aria-describedby="startf"
            value="START"
            onClick={this.handleSubmit}
          />
          <div id="startf" hidden>
            Press and start questionnaire
          </div>
        </React.Fragment>
      );
    } else if (currentQuestion === "Accordions") {
      // remove button for Accordions
      buttons_panel = null;
    } else if (yes === null && no === null) {
      // For Last answare of questionnaire and show PREVIOUS button
      buttons_panel = (
        <React.Fragment>
          <div class="row">
            <div className="col-xs-12 col-md-9" />
            <div className="col-xs-12 col-md-3">
              <input
                type="submit"
                className="btn btn-default"
                aria-describedby="readanswer"
                value="PREVIOUS"
                onClick={this.previous}
              />
              <div id="readanswer" hidden>
                click Will take you to the previous questionnaire
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-xs-12 col-md-12">
              <div className="top-buffer">
                <em>
                  Disclaimer: This interactive tool is a guide to assist
                  registrants using the Lobbyist Registry system; any
                  discrepancy between the chart and Municipal Code Chapter 140,
                  Municipal Code Chapter 140 shall govern.
                </em>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      buttons_panel = ( // This is standard radio button (YES | No)
        <React.Fragment>
          <div className="row">
            <div className="col-xs-12 col-md-9">
              <div className="form-group">
                <label htmlFor="Q1Yes" className="radio-inline">
                  <input
                    type="radio"
                    name="Q1"
                    id="Q1Yes"
                    value={yes}
                    onChange={e => {
                      this.setState({
                        answerSelect: parseInt(e.target.value)
                      });
                    }}
                    checked={this.state.answerSelect === yes}
                  />
                  Yes
                </label>
                <label htmlFor="Q1No" className="radio-inline">
                  <input
                    type="radio"
                    name="Q1"
                    id="Q1No"
                    value={no}
                    onChange={e => {
                      this.setState({
                        answerSelect: parseInt(e.target.value)
                      });
                    }}
                    checked={this.state.answerSelect === no}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="form-group">{previous_next_btn}</div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    // Render Start Over button or title "Do I Need to Register as a Lobbyist?"
    let questionTitleStartOver;
    if (id === 1) {
      // if question #1 then show title
      questionTitleStartOver = (
        <React.Fragment>
          <div className="row">
            <div className="col-xs-12 col-md-9">
              <h2>Do I Need to Register as a Lobbyist?</h2>
            </div>
            <div className="col-xs-12 col-md-3" />
          </div>
        </React.Fragment>
      );
    } else {
      // else hide tile and show "Start Over" button
      questionTitleStartOver = (
        <React.Fragment>
          <div className="row">
            <div className="col-xs-12 col-md-9" />
            <div className="col-xs-12 col-md-3">
              <button
                className="btn btn-default"
                aria-describedby="startsr"
                onClick={this.startOver}
              >
                Start Over
              </button>
              <div id="startsr" hidden>
                Will take you to the beginning of the questionnaire
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    // Accordions display for question 4, 6 and 8
    let Accordions;
    if (currentQuestion === "Accordions") {
      Accordions = (
        <React.Fragment>
          <legend tabIndex="-1">
            Are you subject to any of the exemptions found in sections{" "}
            <a
              href="http://www.toronto.ca/legdocs/municode/1184_140.pdf"
              target="_blank"
              title="PDF Document"
              rel="noopener noreferrer"
            >
              <span class="sr-only">Toronto municipal code chapter 140-3</span>
              §. 140-3<span class="sr-only">Open in New Window</span>
            </a>{" "}
            to{" "}
            <a
              href="http://www.toronto.ca/legdocs/municode/1184_140.pdf"
              target="_blank"
              title="PDF Document"
              rel="noopener noreferrer"
            >
              <span class="sr-only">Toronto municipal code chapter 140-6</span>
              §. 140-6<span class="sr-only">Open in New Window</span>
            </a>{" "}
            of the Lobbying By-law?
          </legend>

          <div className="radio">
            <label htmlFor="exemptQ1">
              <input
                type="radio"
                name="option1"
                id="exemptQ1"
                value="34"
                checked={
                  this.state.answerSelect === 34 &&
                  this.state.radioSelect === "exemptQ1"
                }
                onChange={e => {
                  this.setState({
                    answerSelect: parseInt(e.target.value),
                    radioSelect: "exemptQ1"
                  });
                }}
              />
              You are a government or public sector official acting in your
              official capacity
            </label>
          </div>
          <div className="radio">
            <label htmlFor="exemptQ2">
              <input
                type="radio"
                name="option1"
                id="exemptQ2"
                value="34"
                checked={
                  this.state.answerSelect === 34 &&
                  this.state.radioSelect === "exemptQ2"
                }
                onChange={e => {
                  this.setState({
                    answerSelect: parseInt(e.target.value),
                    radioSelect: "exemptQ2"
                  });
                }}
              />
              You are speaking during Council, Standing Committee, Public
              meeting, open house or media even sponsored by the City
            </label>
          </div>
          <div className="radio">
            <label htmlFor="exemptQ3">
              <input
                type="radio"
                name="option1"
                id="exemptQ3"
                value="34"
                checked={
                  this.state.answerSelect === 34 &&
                  this.state.radioSelect === "exemptQ3"
                }
                onChange={e => {
                  this.setState({
                    answerSelect: parseInt(e.target.value),
                    radioSelect: "exemptQ3"
                  });
                }}
              />
              You are requesting information
            </label>
          </div>
          <div className="radio">
            <label htmlFor="exemptQ4">
              <input
                type="radio"
                name="option1"
                id="exemptQ4"
                value="34"
                checked={
                  this.state.answerSelect === 34 &&
                  this.state.radioSelect === "exemptQ4"
                }
                onChange={e => {
                  this.setState({
                    answerSelect: parseInt(e.target.value),
                    radioSelect: "exemptQ4"
                  });
                }}
              />
              You are providing compliments or complaints about a program or
              service
            </label>
          </div>
          <div className="radio">
            <label htmlFor="exemptQ5">
              <input
                type="radio"
                name="option1"
                id="exemptQ5"
                value="21"
                checked={
                  this.state.answerSelect === 21 &&
                  this.state.radioSelect === "exemptQ5"
                }
                onChange={e => {
                  this.setState({
                    answerSelect: parseInt(e.target.value),
                    radioSelect: "exemptQ5"
                  });
                }}
              />
              You are a not-for-profit subject to exceptions in § 140-4 of the
              Lobbying By-law
            </label>
          </div>
          <div className="radio">
            <label htmlFor="exemptQ6">
              <input
                type="radio"
                name="option1"
                id="exemptQ6"
                value={this.state.id}
                checked={
                  this.state.answerSelect === this.state.id &&
                  this.state.radioSelect === "exemptQ6"
                }
                onChange={e => {
                  this.setState({
                    answerSelect: this.state.id,
                    radioSelect: "exemptQ6"
                  });
                }}
              />
              None of the above apply to me
            </label>
          </div>
          <div className="col-xs-12 col-md-9" />
          <div className="col-xs-12 col-md-3">{previous_next_btn}</div>
        </React.Fragment>
      );
    }
    // Not to show Accordions title becuase accordions title is with in accordions

    return (
      <React.Fragment>
        {/* Render questionary title and "Start Over" question. */}
        {questionTitleStartOver}
        <div className="row">
          <div className="media col-xs-12 col-md-12">
            {/* <p>Question #{this.state.id}</p> Uncomment to see Question # */}
            <CSSTransition
              key={forward.length - 1}
              in={true}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
              <fieldset>
                {currentQuestion === "Accordions" ? (
                  Accordions
                ) : (
                  <legend
                    tabIndex="-1"
                    dangerouslySetInnerHTML={{ __html: currentQuestion }}
                  />
                )}
                {buttons_panel}
              </fieldset>
            </CSSTransition>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
