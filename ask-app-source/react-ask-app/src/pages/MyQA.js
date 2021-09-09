import React, { useState } from "react";
import Question from "../components/Question";

const MyQA = (props) => {
  const id = String(props.userId);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [callCounter, setCallCounter] = useState(0);
  const [showingMore, setShowingMore] = useState(false);
  const [showBtn, setShowBtn] = useState("Show more");
  console.log(props.name);
  const loadQuestions = async () => {
    const response = await fetch("http://localhost:8000/api/getuserquestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id }),
    });
    //const content = await response.json();
    setQuestions(await response.json());
    //console.log(content);
  };
  const loadAnswers = async () => {
    const response = await fetch("http://localhost:8000/api/getuseranswers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id }),
    });
    //const content = await response.json();
    setAnswers(await response.json());
    //console.log(content);
  };
  const showMore = () => {
    showingMore ? setShowBtn("Show more") : setShowBtn("Show less");
    showingMore ? setShowingMore(false) : setShowingMore(true);
  };
  let renderedQuestions;
  let renderedAnswers;
  if (showingMore === false) {
    renderedQuestions = questions
      .slice(questions.length - 20, questions.length)
      .map(
        ({
          id,
          question,
          qPosterId,
          qPosterName,
          likes,
          answer,
          aPosterId,
          aPosterName,
        }) => (
          <div /*onClick={() => loadAnswersById(String(id))}*/>
            <Question
              key={id}
              id={id}
              question={question}
              opName={qPosterName}
              likes={likes}
              answer={answer}
              home={false}
              // Info za answer formu
              aPosterId={props.userId}
              aPosterName={props.name}
              answerName={aPosterName}
            />
          </div>
        )
      )
      .reverse();
  } else {
    renderedQuestions = questions
      .map(
        ({
          id,
          question,
          qPosterId,
          qPosterName,
          likes,
          answer,
          aPosterId,
          aPosterName,
        }) => (
          <div /*onClick={() => loadAnswersById(String(id))}*/>
            <Question
              key={id}
              id={id}
              question={question}
              opName={qPosterName}
              likes={likes}
              answer={answer}
              home={false}
              // Info za answer formu
              aPosterId={props.userId}
              aPosterName={props.name}
              answerName={aPosterName}
            />
          </div>
        )
      )
      .reverse();
  }
  renderedAnswers = answers
    .map(
      ({
        id,
        question,
        qPosterId,
        qPosterName,
        likes,
        answer,
        aPosterId,
        aPosterName,
      }) => (
        <div /*onClick={() => loadAnswersById(String(id))}*/>
          <Question
            key={id}
            id={id}
            question={question}
            opName={qPosterName}
            likes={likes}
            answer={answer}
            home={false}
            myqa={true}
            myanswers={true}
            // Info za answer formu
            aPosterId={props.userId}
            aPosterName={props.name}
            answerName={aPosterName}
          />
        </div>
      )
    )
    .reverse();
  if (callCounter === 0) {
    loadQuestions();
    loadAnswers();
    setCallCounter(1);
  }
  return (
    <div className="list-group">
      <h4>My Latest Questions</h4>
      <hr /> {renderedQuestions}
      <button className="w-20 btn btn-sm btn-primary" onClick={showMore}>
        {showBtn}
      </button>
      <br />
      <h4>My Answers</h4>
      <hr /> {renderedAnswers}
    </div>
  );
};

export default MyQA;
