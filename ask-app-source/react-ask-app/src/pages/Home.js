import React, { useState } from "react";
import Question from "../components/Question";
import User from "../components/User";
const Home = (props) => {
  const [questions, setQuestions] = useState([]);
  const [topQuestions, setTopQuestions] = useState([]);
  const [users, setUsers] = useState([]);
  const [callCounter, setCallCounter] = useState(0);
  const [showingMore, setShowingMore] = useState(false);
  const [showBtn, setShowBtn] = useState("Show more");
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

  const loadTopQuestions = async () => {
    const response = await fetch("http://localhost:8000/api/gettopquestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    setTopQuestions(await response.json());
  };

  const loadUsers = async () => {
    const response = await fetch("http://localhost:8000/api/getusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    setUsers(await response.json());
  };

  if (callCounter === 0) {
    loadQuestions();
    loadTopQuestions();
    loadUsers();
    setCallCounter(1);
  }
  const showMore = () => {
    showingMore ? setShowBtn("Show more") : setShowBtn("Show less");
    showingMore ? setShowingMore(false) : setShowingMore(true);
  };
  let renderedQuestions;
  let renderedTopQuestions;
  let renderedUsers;
  if (showingMore === false) {
    renderedQuestions = questions
      .slice(questions.length - 20, questions.length)
      .map(({ id, question, qPosterId, qPosterName, likes }) => (
        <Question
          key={id}
          question={question}
          opName={qPosterName}
          likes={likes}
        />
      ))
      .reverse();
  } else {
    renderedQuestions = questions
      .slice(questions.length - 30, questions.length)
      .map(({ id, question, qPosterId, qPosterName, likes }) => (
        <Question
          key={id}
          question={question}
          opName={qPosterName}
          likes={likes}
        />
      ))
      .reverse();
  }

  renderedUsers = users.map(({ id, firstName, lastName, answers }) => (
    <User
      key={id}
      firstName={firstName}
      lastName={lastName}
      answers={answers}
    />
  ));

  renderedTopQuestions = topQuestions.map(
    ({ id, question, qPosterId, qPosterName, likes }) => (
      <Question
        key={id}
        question={question}
        opName={qPosterName}
        likes={likes}
      />
    )
  );
  return (
    <div className="list-group">
      <h4>Latest Questions</h4>
      {renderedQuestions}
      <button className="w-20 btn btn-sm btn-primary" onClick={showMore}>
        {showBtn}
      </button>
      <br />
      <h4>Users with most answers</h4>
      {renderedUsers}
      <br />
      <h4>Top 10 Questions</h4>
      {renderedTopQuestions}
    </div>
  );
};

export default Home;
