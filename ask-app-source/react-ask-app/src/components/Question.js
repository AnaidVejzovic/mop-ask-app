import React, { useState } from "react";
import "./ListStyle.css";
import Answer from "./Answer";
const Question = (props) => {
  const [answer, setAnswer] = useState("");
  const [likes, setLikes] = useState(props.likes);
  let renderedAnswer;
  let renderedLike;
  const questionId = String(props.id);
  const qPosterId = String(props.qPosterId);
  const aPosterId = String(props.aPosterId);
  const aPosterName = String(props.aPosterName);
  const submitAnswer = async () => {
    fetch(" http://localhost:8000/api/postanswer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        questionId,
        qPosterId,
        answer,
        aPosterId,
        aPosterName,
      }),
    });
  };
  const deleteAnswer = () => {
    fetch(" http://localhost:8000/api/deleteanswer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        questionId,
      }),
    });
    window.location.reload(false);
  };
  const likeQuestion = () => {
    fetch(" http://localhost:8000/api/likequestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ questionId }),
    });
    const newLikes = likes + 1;
    setLikes(newLikes);
  };
  const dislikeQuestion = () => {
    fetch(" http://localhost:8000/api/dislikequestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ questionId }),
    });
    const newLikes = likes - 1;
    setLikes(newLikes);
  };
  if (
    props.answer !== "" &&
    props.answer !== undefined &&
    props.answer !== "undefined" &&
    props.home === false &&
    props.myanswers !== true
  ) {
    renderedAnswer = <Answer answer={props.answer} name={props.answerName} />;
  } else if (
    props.home === false &&
    props.myanswers !== true &&
    props.aPosterId !== undefined &&
    props.aPosterId !== "undefined" &&
    props.aPosterId !== ""
  ) {
    renderedAnswer = (
      <form onSubmit={submitAnswer}>
        <input
          type="text"
          className="form-control py-1 d-inline"
          style={{ width: "90%" }}
          placeholder="Post the answer"
          required
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="py-1 btn btn-outline-primary d-inline" type="submit">
          Submit
        </button>
      </form>
    );
  } else if (props.myanswers === true) {
    renderedAnswer = (
      <div>
        <Answer answer={props.answer} name={props.answerName} />
        <form onSubmit={submitAnswer} className="d-inline">
          <input
            type="text"
            className="form-control py-1 d-inline"
            style={{ width: "80%" }}
            placeholder="Repost your answer"
            required
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button
            className="py-1 btn btn-outline-primary d-inline"
            style={{ width: "10%" }}
            type="submit"
          >
            Submit
          </button>
        </form>
        <button
          className="py-1 btn btn-danger d-inline"
          style={{ width: "10%" }}
          onClick={deleteAnswer}
        >
          Delete
        </button>
      </div>
    );
  }
  if (
    props.home === false &&
    props.myqa === false &&
    props.aPosterId !== undefined &&
    props.aPosterId !== "undefined" &&
    props.aPosterId !== ""
  ) {
    renderedLike = (
      <div>
        <button
          className="w-20 py-1 btn btn-outline-success d-inline"
          onClick={likeQuestion}
        >
          <span>▲</span>
        </button>
        <button
          className="w-20 py-1 btn btn-outline-danger d-inline"
          onClick={dislikeQuestion}
        >
          <span>▼</span>
        </button>
      </div>
    );
  }
  // ELSE form za odgovor
  // else if props.home===false i onda render formu

  // Nece biti answer buttona u Questions, nego ce se answer forma renderati ovdje, a svi argumenti ce se proslijediti kroz props
  // Funkcija za odgovor ce biti ovdje
  // dodati if (props.home===false) -> renderati answer i like, ako je true onda ne renderati
  return (
    <div
      className="list-group-item list-group-item-action d-inline-flex gap-3 py-3"
      style={props.style}
    >
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div className="w-100">
          <h6 className="mb-0">Q: {props.question}</h6>
          <small className="mb-0 opacity-75">Posted by: {props.opName}</small>
          {renderedAnswer}
        </div>
        <small className="d-inline opacity-70 text-nowrap text-success">
          {renderedLike} Likes: {likes}
        </small>
      </div>
    </div>
  );
};

export default Question;
