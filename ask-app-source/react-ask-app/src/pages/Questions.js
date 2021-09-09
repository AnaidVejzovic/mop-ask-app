import React, { useState } from "react";
import Question from "../components/Question";
const Questions = (props) => {
  const id = String(props.userId);
  const name = props.name;
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState([]);
  const [callCounter, setCallCounter] = useState(0);
  const [message, setMessage] = useState("");
  console.log(props.name);
  const submitQuestion = async (e) => {
    e.preventDefault();
    const response = await fetch(" http://localhost:8000/api/postquestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ question, id, name }),
    });
    const content = await response.json();
    setMessage(content.message);
  };
  const loadQuestions = async () => {
    const response = await fetch("http://localhost:8000/api/getquestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    setQuestions(await response.json());
  };

  let questionForm;
  if (id !== "undefined") {
    questionForm = (
      <div>
        <form onSubmit={submitQuestion}>
          <input
            type="text"
            className="form-control d-inline"
            style={{ width: "90%" }}
            placeholder="Ask a question"
            required
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className="d-inline btn  btn-primary"
            type="submit"
            style={{ width: "10%" }}
          >
            Ask
          </button>
        </form>
        <div className="alert-success">{message}</div>
      </div>
    );
  } else {
    questionForm = (
      <div>
        <h5>Please Log in to ask or answer questions.</h5>
        <br />
      </div>
    );
  }

  let renderedQuestions;
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
        <div>
          <Question
            key={id}
            id={id}
            qPosterId={qPosterId}
            question={question}
            opName={qPosterName}
            likes={likes}
            answer={answer}
            home={false}
            myqa={false}
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
    setCallCounter(1);
  }

  return (
    <div className="list-group">
      {questionForm}
      <br /> {renderedQuestions}
      <br />
    </div>
  );
};

export default Questions;
