import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Questions from "./pages/Questions";
import MyQA from "./pages/MyQA";
import { HashRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.firstName);
      setLastName(content.lastName);
      setEmail(content.email);
      setId(content.id);
    })();
  });
  return (
    <div className="App">
      <HashRouter>
        <Nav
          name={name}
          setName={
            setName
          } /* ovdje ubaciti id prop sa kojim cemo pretraziti user notifications*/
          userId={id}
        />

        <Route
          path="/"
          exact
          component={() => <Home name={name} userId={id} />}
        />
        <Route
          path="/questions"
          component={() => (
            <Questions userId={id} name={name + " " + lastName} />
          )}
        />
        <Route path="/login" component={() => <Login setName={setName} />} />
        <Route path="/register" component={Register} />
        <Route
          path="/myqa"
          component={() => <MyQA userId={id} name={name + " " + lastName} />}
        />
        <Route
          path="/profile"
          component={() => (
            <Profile firstName={name} lastName={lastName} email={email} />
          )}
        />
      </HashRouter>
    </div>
  );
}

export default App;

// Poslije <Nav> i prije </BrowserROuter>: <main className="form-signin"> i </main>
