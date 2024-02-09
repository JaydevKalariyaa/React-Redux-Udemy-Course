import React, { useState, useCallback, useRef } from "react";
import questions from "../questions";
import Summary from "./Summary";
import QuizTimer from "./QuizTimer";

export default function Quiz() {
  const [userAns, setUserAns] = useState([]);
  const showQuestionIndex = userAns.length;
  console.log("<Quiz> is rendered");
  const handleClick = useCallback(
    function handleClick(e, option) {
      document.querySelectorAll(".bt").forEach((bt) => {
        if (bt.value === questions[showQuestionIndex].answers[0]) {
          bt.classList.add("correct");
        }
        bt.disabled = "true";
      });
      let timer = 1000;
      if (option && option !== questions[showQuestionIndex].answers[0]) {
        e.target.classList.add("wrong");
        timer = 2000;
      }

      setTimeout(() => {
        setUserAns((prev) => {
          return [...prev, option];
        });
      }, timer);
    },
    [showQuestionIndex]
  );

  if (showQuestionIndex >= questions.length) {
    return <Summary userAnswers={userAns} />;
  }
  const { text, answers } = questions[showQuestionIndex];

  //suffling of options
  let newAns = [...answers];
  newAns.sort((a, b) => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={showQuestionIndex}
          timeout={10000}
          handleClick={handleClick}
        />
        <h2 className="question">{text}</h2>
        <ul id="answers">
          {newAns.map((option, i) => {
            return (
              <li key={option} className="answer">
                <button
                  onClick={(e) => handleClick(e, option)}
                  className="bt"
                  value={option}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
