import "core-js/fn/array/find";
import React, { useState, useEffect } from "react";
import data from "./data/data";
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
    focuseStartBtn: false
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
    focuseStartBtn
  } = state; // Shorten state in typing.

  useEffect(() => {
    // console.log("useEffect Called");
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
          focuseStartBtn: true
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
        no: data.questions.find(item => item.id === key).no
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
        no: data.questions.find(item => item.id === key).no
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

  // Render Previous and Next button
  let previous_next_btn = (
    <React.Fragment>
      <div className="form-group">
        <input
          type="submit"
          className="btn btn-primary"
          aria-describedby="nextsr"
          value="NEXT"
          disabled={answerSelect === answer[state.answer.length - 1]}
          onClick={handleSubmit}
        />{" "}
        <input
          type="submit"
          className="btn btn-default"
          aria-describedby="previoussr"
          value="PREVIOUS"
          onClick={previous}
        />{" "}
        <button
          className="btn btn-default"
          aria-describedby="startsr"
          onClick={startOver}
        >
          START OVER
        </button>
        <div id="startsr" className="sr-only">
          Will take you to the beginning of the questionnaire
        </div>
        <div id="previoussr" className="sr-only">
          Will take you to the previous question
        </div>
        <div id="nextsr" className="sr-only">
          Will take you to the next question
        </div>
      </div>
    </React.Fragment>
  );
  // Control buttons
  let buttons_panel;
  if (
    id === 1 // For the #1 Question to show START button
  ) {
    buttons_panel = ( // this is START button comes at first question.
      <React.Fragment>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            aria-labelledby="startf"
            // aria-describedby="startf"
            value="START"
            autoFocus={focuseStartBtn === true ? true : false}
            onClick={handleSubmit}
          />
          <div id="startf" className="sr-only">
            Do I Need to Register as a Lobbyist? Answer this quick and easy
            interactive questionnaire to find out. Press and start
            questionnaire.
          </div>
        </div>
      </React.Fragment>
    );
  } else if (accordion != null) {
    // remove button for Accordions
    buttons_panel = (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="form-group">
              {accordion.map((id, v = 0) => (
                <label key={v + 11} className="radio" htmlFor={id.id}>
                  <input
                    type="radio"
                    name="option"
                    id={id.id}
                    value={id.yes}
                    autoFocus={v === 0 ? true : false}
                    key={v++}
                    checked={radioSelect === id.id}
                    onChange={e => {
                      setstate({
                        ...state,
                        answerSelect: parseInt(e.target.value),
                        radioSelect: id.id
                      });
                    }}
                  />
                  {id.desc}
                </label>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (yes === null && no === null) {
    // For Last answare of questionnaire, It show PREVIOUS button
    buttons_panel = (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12 col-md-9" />
          <div className="col-xs-12 col-md-3">
            {/* <input
              type="submit"
              className="btn btn-default"
              value="PREVIOUS"
              onClick={previous}
              aria-labelledby="previous_q"
              autoFocus
            />{" "}
            <div id="previous_q" className="sr-only">
              Will take you to the previous question.
            </div> */}
            <input
              type="submit"
              className="btn btn-default"
              aria-describedby="previous_q"
              value="PREVIOUS"
              onClick={previous}
              autoFocus
            />{" "}
            <div id="previous_q" className="sr-only">
              Will take you to the previous question.
            </div>
            <button
              className="btn btn-default"
              aria-describedby="startsr"
              onClick={startOver}
            >
              START OVER
            </button>
            <div id="startsr" className="sr-only">
              Will take you to the beginning of the questionnaire
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="top-buffer">
              <em>
                Disclaimer: This interactive tool is a guide to assist
                registrants using the Lobbyist Registry system; any discrepancy
                between the chart and Municipal Code Chapter 140, Municipal Code
                Chapter 140 shall govern.
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
          <div className="col-xs-12 col-md-12">
            <div className="form-group">
              <label htmlFor="yes" className="radio-inline">
                <input
                  type="radio"
                  name="option1"
                  id="yes"
                  value={yes}
                  autoFocus
                  onChange={e => {
                    setstate({
                      ...state,
                      answerSelect: parseInt(e.target.value)
                    });
                  }}
                  checked={answerSelect === yes}
                />
                Yes
              </label>
              <label htmlFor="no" className="radio-inline">
                <input
                  type="radio"
                  name="option1"
                  id="no"
                  value={no}
                  onChange={e => {
                    setstate({
                      ...state,
                      answerSelect: parseInt(e.target.value)
                    });
                  }}
                  checked={answerSelect === no}
                />
                No
              </label>
            </div>
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
  }
  // else {
  //   // else hide tile and show "Start Over" button
  //   questionTitleStartOver = (
  //     <React.Fragment>
  //       <div className="row">
  //         <div className="col-xs-12 col-md-9" />
  //         <div className="col-xs-12 col-md-3">
  //           <button
  //             className="btn btn-default"
  //             aria-describedby="startsr"
  //             onClick={startOver}
  //           >
  //             START OVER
  //           </button>
  //           <div id="startsr" className="sr-only">
  //             Will take you to the beginning of the questionnaire
  //           </div>
  //         </div>
  //       </div>
  //     </React.Fragment>
  //   );
  // }

  // Not to show Accordions title becuase accordions title is with in accordions
  const roleSet = (
    <div role="application" aria-labelledby="readThisQuestion" tabIndex="-1">
      <div role="region" aria-label="question">
        <div
          id="readThisQuestion"
          className="question"
          dangerouslySetInnerHTML={{
            __html:
              '<span class="sr-only" >The answer is. </span> ' + currentQuestion
          }}
        />
      </div>
      {buttons_panel}
    </div>
  );

  const plainStartBtn = (
    <>
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: currentQuestion }}
      />

      {buttons_panel}
    </>
  );

  const roleSet_ShowPreviousNextBtn = ( // for the question 3, 7, 12 we have UL, LI tag so taking out of fieldset
    <div role="application" aria-labelledby="readThisQuestion" tabIndex="-1">
      <div role="region" aria-label="question">
        <div
          id="readThisQuestion"
          className="question"
          dangerouslySetInnerHTML={{ __html: currentQuestion }}
        />
      </div>

      {buttons_panel}
      <div className="row">
        <div className="col-xs-12 col-md-8" />
        <div className="col-xs-12 col-md-4">{previous_next_btn}</div>
      </div>
    </div>
  );
  let chooseQuestion; // Set With Or Without HTML fieldset tag
  switch (id) {
    case 1:
      chooseQuestion = plainStartBtn;
      break;
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
      chooseQuestion = roleSet;
      break;
    default:
      chooseQuestion = roleSet_ShowPreviousNextBtn;
  }

  return (
    <React.Fragment>
      {/* Render questionary title and "Start Over" question. */}
      {questionTitleStartOver}
      <div className="row">
        <div className="media col-xs-12 col-md-12">
          {/* <p>Question #{id}</p>  Uncomment to see Question # */}
          <CSSTransition
            key={forward.length - 1}
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <React.Fragment>{chooseQuestion}</React.Fragment>
          </CSSTransition>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
