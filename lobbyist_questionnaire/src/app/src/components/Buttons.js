import React from "react";

const StartBtn = props => (
  <>
    <input
      type="submit"
      className="btn btn-primary"
      aria-labelledby="startf"
      value="START"
      autoFocus={props.autoFocus}
      onClick={props.onClick}
    />
    <div id="startf" className="sr-only">
      Do I Need to Register as a Lobbyist? Answer this quick and easy
      interactive questionnaire to find out. Press and start questionnaire.
    </div>
  </>
);

const NextBtn = props => (
  <>
    <input
      type="submit"
      className="btn btn-primary"
      aria-describedby="nextsr"
      value="NEXT"
      disabled={props.disabled}
      onClick={props.onClick}
    />
    <div id="nextsr" className="sr-only">
      Will take you to the next question
    </div>
  </>
);

const PreviousAnswerBtn = props => (
  <>
    <input
      type="submit"
      className="btn btn-default"
      aria-labelledby="previousanswer"
      // aria-describedby="previoussr"
      value="PREVIOUS"
      autoFocus
      onClick={props.onClick}
    />
    <div id="previousanswer" className="sr-only">
      The answer is. {props.answer}. Click will take you previous question.
    </div>
  </>
);

const PreviousBtn = props => (
  <>
    <input
      type="submit"
      className="btn btn-default"
      aria-describedby="previoussr"
      value="PREVIOUS"
      onClick={props.onClick}
      autoFocus={props.autoFocus}
    />
    <div id="previoussr" className="sr-only">
      Will take you to the previous question
    </div>
  </>
);

const StartOverBtn = props => (
  <>
    <button
      className="btn btn-default"
      aria-describedby="startsr"
      onClick={props.onClick}
    >
      START OVER
    </button>
    <div id="startsr" className="sr-only">
      Will take you to the beginning of the questionnaire
    </div>
  </>
);

export { StartBtn, NextBtn, PreviousBtn, StartOverBtn, PreviousAnswerBtn };
