import React, { useState } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
const Questions = (props) => {
  const id = String(props.userId);
  const name = props.name;
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState([]);
  //const [questionPosterName, setQuestionPosterName] = useState("");

  const [callCounter, setCallCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  console.log(props.name);
  const submitQuestion = async (e) => {
    e.preventDefault();
    fetch(" http://localhost:8000/api/postquestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ question, id, name }),
    });
  };
  const loadQuestions = async () => {
    const response = await fetch("http://localhost:8000/api/getquestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    //const content = await response.json();
    setQuestions(await response.json());
    //console.log(content);
  };
  /*const getNameById = async (qPosterId) => {
    const response = await fetch("http://localhost:8000/api/getnamebyid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qPosterId }),
      credentials: "include",
    });
    const content = await response.json();
    //setQuestionPosterName(content);
    return content;
  };*/
  /*const loadAnswersById = async (questionId) => {
    const response = await fetch("http://localhost:8000/api/getanswersbyid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId }),
      credentials: "include",
    });
    const content = await response.json();
    const parsedAnswers = content.map(({ id, answer }) => (
      <Answer key={id} answer={answer} />
    ));

    return { parsedAnswers };
    //return <div>{answers}</div>;
    //console.log(content);
    //return content.map ili staviti answers = content.map i onda return answers <Answer answer="answerString"

    //return <Answer answer={"Hofman: Ovo je odgovor na pitanje"} />;
  };*/

  /*const callLoadAnswersById = (id) => {
    const answers = loadAnswersById(String(id));
    return answers;
  };*/

  let questionForm;
  if (id !== "undefined") {
    questionForm = (
      <form onSubmit={submitQuestion}>
        <input
          type="text"
          className="form-control"
          placeholder="Ask a question"
          required
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="w-20 btn btn-sm btn-primary" type="submit">
          Ask
        </button>
      </form>
    );
  } else {
    questionForm = (
      <div>
        <h5>Please Log in to ask or answer questions.</h5>
        <br />
      </div>
    );
  }
  let exampleDiv = <h1>Example</h1>;
  const testFunc = async (likes) => {
    console.log(`Likes: ${likes}`);
  };
  const testFunc2 = (id) => {
    return <h1>Ponovo test i id pitanje je:{id}</h1>;
  };
  // Unutar Answer elementa pozvati funkciju kao na fazon getNameById, ali u GO skripti concatenateat Ime i Prezime sa Odgovorom
  // U go skriptu proslijediti id, i na osnovu tog id-a naci odgovore
  // Zapravo funkciju pozvati ovako {getAnswers(id)}, a funkcija ce return .map(<Answer answer={content} />)
  //loadAnswersById("60");
  let renderedQuestions;
  renderedQuestions = questions
    .map(({ id, question, qPosterId, qPosterName, likes }) => (
      <div /*onClick={() => loadAnswersById(String(id))}*/>
        <button
          className="d-inline-flex btn btn-sm btn-primary"
          style={{ width: "10%" }}
        >
          Answer
        </button>

        <Question
          style={{ width: "80%" }}
          key={id}
          question={question}
          //onLoad={getNameById(qPosterId)}
          //onLoad={() => loadAnswersById(String(id))}
          opName={qPosterName} // getNameById(qPosterId)
          likes={likes}
          //answers={answers}
        />
        <button
          className="d-inline-flex btn btn-sm btn-primary"
          style={{ width: "10%", height: "100%" }}
          onClick={() => {
            console.log(likes);
          }}
        >
          Like
        </button>
        <Answer answer={answers} />
      </div>
    ))
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
      {() => loadAnswersById("60")}
    </div>
  );
};

export default Questions;

/*<Answer answer={"Hofman: Ovo je odgovor na pitanje"} />
        <Answer answer={"Hofman: Ovo je odgovor na pitanje"} />
        {testFunc2(id)}*/
