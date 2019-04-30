import "core-js/fn/array/find";
import React, { useState, useEffect } from "react";
import data from "./data/data";
import {
  StartBtn,
  NextBtn,
  PreviousBtn,
  StartOverBtn,
  PreviousAnswerBtn
} from "./components/Buttons";
import { CSSTransition } from "react-transition-group";
import "./App.css";

const App = () => {
  const [state, setstate] = useState({
    id: data.questions.find(item => item.id === 1).id, // this is id of question
    forward: [data.questions.find(item => item.id === 1).id], // [questionid] array for forward and backward questionnaire
    answer: [null], // first question answare is null for Start button
    currentQuestion: data.questions.find(item => item.id === 1).desc, // Get the current Question
    // accordion: null, // for Accordion case pick this
    yes: data.questions.find(item => item.id === 1).yes, // Yes to radio button
    no: data.questions.find(item => item.id === 1).no, // No to radio button
    answerSelect: 2, // Select answer while click on radio button, First Start button has answer 2, Take you to question #2 at first time.
    // count: 0, // Can be use for tabIndex
    radioSelect: null, // has been used on Accordions Question case
    focuseStartBtn: false,
    toggle: false // check that its coming from PREVIOUS button
  });

  const {
    id,
    forward,
    answer,
    currentQuestion,
    yes,
    no,
    answerSelect,
    radioSelect,
    accordion,
    focuseStartBtn,
    toggle
  } = state; // Shorten state in typing.

  useEffect(() => {
    switch (id) {
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
        document.title = currentQuestion
          .replace(/<(?:.|\n)*?>/gm, "")
          .substring(0, 115); // Change title to plain text.
        break;
      default:
        document.title = "Do I Need to Register as a Lobbyist?";
        break;
    }

    // remove radioSelect from state  becuase we do not wanted to show selected on next accordion question.
    if (
      answerSelect === 4 || // 4,6,8 are accordions
      answerSelect === 6 ||
      answerSelect === 8
    ) {
      setstate({ ...state, radioSelect: null });
    }
  }, [id, answerSelect]);

  const previous = () => {
    // Set Previous question ready
    if (forward.length) {
      let lastArray = forward[forward.length - 2]; // becuase last array is going to delete
      if (lastArray) {
        // this function check last array and then setState everything for previous question
        setstate({
          ...state,
          id: data.questions.find(item => item.id === lastArray).id,
          forward: [...forward.slice(0, -1)],
          answer: [...answer.slice(0, -1)],
          currentQuestion: data.questions.find(item => item.id === lastArray)
            .desc,
          accordion: data.questions.find(item => item.id === lastArray)
            .accordion,
          yes: data.questions.find(item => item.id === lastArray).yes,
          no: data.questions.find(item => item.id === lastArray).no,
          answerSelect: answer[answer.length - 1], // now, take a last array
          focuseStartBtn: true,
          toggle: true
          // radioSelect: radioSelect, // to send previous Accordions radio answare which is same.
          // count: count + 1
        });
      }
    }
  };

  const handleSubmit = e => {
    // this function is call on click NEXT and START button
    let key = answerSelect; // Whatever value on radio click assign to key.
    // Send to Question Selection question=>answare { 4=>31, 6=>32, 8=>33 }
    if (accordion !== null) {
      setstate({
        ...state,
        id: data.questions.find(item => item.id === key).id,
        forward: [...forward, data.questions.find(item => item.id === key).id],
        answer: [...answer, answerSelect],
        currentQuestion: data.questions.find(item => item.id === key).desc,
        accordion:
          data.questions.find(item => item.id === key).accordion || null,
        // accordion: null, // remove accordion
        // accordion: data.questions.find(item => item.id === key).accordion,
        yes: data.questions.find(item => item.id === key).yes,
        no: data.questions.find(item => item.id === key).no,
        toggle: false
        // radioSelect: null,
        // count: count + 1
      });
    } else {
      // except case { 4=>31, 6=>32, 8=>33 } all set
      setstate({
        ...state,
        id: data.questions.find(item => item.id === key).id,
        forward: [...forward, data.questions.find(item => item.id === key).id],
        answer: [...answer, answerSelect],
        currentQuestion: data.questions.find(item => item.id === key).desc,
        accordion:
          data.questions.find(item => item.id === key).accordion || null,
        yes: data.questions.find(item => item.id === key).yes,
        no: data.questions.find(item => item.id === key).no,
        toggle: false
        // radioSelect: null, // becuase radioSelect is only for accordions
        // count: count + 1
      });
    }
  };

  const startOver = () => {
    // this function call on click Start Over button
    setstate({
      ...state,
      id: data.questions.find(item => item.id === 1).id,
      forward: [data.questions.find(item => item.id === 1).id],
      answer: [2],
      currentQuestion: data.questions.find(item => item.id === 1).desc,
      yes: data.questions.find(item => item.id === 1).yes,
      no: data.questions.find(item => item.id === 1).no,
      answerSelect: 2,
      radioSelect: null, // to send previous Accordions radio answare which is same.
      focuseStartBtn: true
    });
  };

  const ChooseQuestion = () => {
    switch (id) {
      case 1:
        return (
          <>
            <div className="row">
              <div className="col-xs-12 col-md-9">
                <h2>Am I a lobbyist?</h2>
              </div>
              <div className="col-xs-12 col-md-3" />
            </div>
            <div
              className="question"
              dangerouslySetInnerHTML={{ __html: currentQuestion }}
            />
            <div className="form-group">
              <StartBtn
                autoFocus={focuseStartBtn === true ? true : false}
                onClick={handleSubmit}
              />
            </div>
          </>
        );
      case 4:
      case 6:
      case 8:
        return (
          <>
            <div
              className="question"
              id="questionSpeek"
              dangerouslySetInnerHTML={{ __html: currentQuestion }}
            />
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="form-group">
                  {accordion.map((id, v = 0) => (
                    <label
                      key={v + 11}
                      className="radio"
                      id={"r" + id.id}
                      htmlFor={id.id}
                    >
                      <input
                        type="radio"
                        name="option"
                        id={id.id}
                        value={id.yes}
                        aria-labelledby={
                          toggle
                            ? radioSelect === id.id
                              ? "questionSpeek r" + id.id
                              : null
                            : v === 0 && radioSelect === null
                            ? "questionSpeek r" + id.id
                            : null
                        }
                        // aria-describedby={
                        //   toggle
                        //     ? radioSelect === id.id
                        //       ? "r" + id.id
                        //       : null
                        //     : v === 0 && radioSelect === null
                        //     ? "r" + id.id
                        //     : null
                        // }
                        autoFocus={
                          radioSelect === id.id ? true : v === 0 ? true : false
                        }
                        key={v++}
                        defaultChecked={radioSelect === id.id}
                        onChange={e => {
                          setstate({
                            ...state,
                            answerSelect: parseInt(e.target.value),
                            radioSelect: id.id,
                            toggle: false
                          });
                        }}
                      />
                      {id.desc}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-8" />
              <div className="col-xs-12 col-md-4">
                <div className="form-group">
                  <NextBtn
                    disabled={answerSelect === answer[state.answer.length - 1]}
                    onClick={handleSubmit}
                  />{" "}
                  <PreviousBtn onClick={previous} />{" "}
                  <StartOverBtn onClick={startOver} />
                </div>
              </div>
            </div>
          </>
        );
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
        return (
          <>
            <div
              className="question"
              dangerouslySetInnerHTML={{
                __html: currentQuestion
              }}
            />
            <div className="row">
              <div className="col-xs-12 col-md-9" />
              <div className="col-xs-12 col-md-3">
                <PreviousAnswerBtn
                  onClick={previous}
                  answer={currentQuestion.replace(/<(?:.|\n)*?>/gm, "")}
                />{" "}
                <StartOverBtn onClick={startOver} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="top-buffer">
                  <em>
                    Disclaimer: This interactive tool is a guide to assist
                    registrants using the Lobbyist Registry system; any
                    discrepancy between the chart and Municipal Code Chapter
                    140, Municipal Code Chapter 140 shall govern.
                  </em>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div
              className="question"
              id="questionSpeek"
              dangerouslySetInnerHTML={{ __html: currentQuestion }}
            />

            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="yes" id="ryes" className="radio-inline">
                    <input
                      type="radio"
                      name="option1"
                      id="yes"
                      value={yes}
                      aria-labelledby={
                        answerSelect === yes && toggle
                          ? "questionSpeek ryes"
                          : answerSelect === yes ||
                            answerSelect === no ||
                            toggle
                          ? null
                          : "questionSpeek ryes"
                      }
                      autoFocus={
                        answerSelect === yes
                          ? true
                          : answerSelect === no
                          ? false
                          : true
                      }
                      onClick={e => {
                        setstate({
                          ...state,
                          answerSelect: parseInt(e.target.value),
                          toggle: false
                        });
                      }}
                      defaultChecked={answerSelect === yes}
                    />
                    Yes
                  </label>
                  <label htmlFor="no" id="rno" className="radio-inline">
                    <input
                      type="radio"
                      name="option1"
                      id="no"
                      value={no}
                      aria-labelledby={
                        answerSelect === no && toggle
                          ? "questionSpeek rno"
                          : null
                      }
                      autoFocus={answerSelect === no ? true : false}
                      onClick={e => {
                        setstate({
                          ...state,
                          answerSelect: parseInt(e.target.value),
                          toggle: false
                        });
                      }}
                      defaultChecked={answerSelect === no}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-md-8" />
              <div className="col-xs-12 col-md-4">
                <div className="form-group">
                  <NextBtn
                    disabled={answerSelect === answer[state.answer.length - 1]}
                    onClick={handleSubmit}
                  />{" "}
                  <PreviousBtn onClick={previous} />{" "}
                  <StartOverBtn onClick={startOver} />
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        {/* <div role="region" aria-label="questionnaire"> */}
        <div className="media col-xs-12 col-md-12">
          {/* <p>Question #{id}</p> */}
          <CSSTransition
            key={forward.length - 1}
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <React.Fragment>
              <ChooseQuestion />
            </React.Fragment>
          </CSSTransition>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default App;
