import React, { useState } from "react";
import { Redirect } from "react-router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reditect, setRedirect] = useState(false);
  const [message, setMessage] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(" http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const content = await response.json();
    if (content.message !== "success") {
      setMessage(content.message);
    } else {
      props.setName(content.name);
      setRedirect(true);
      window.location.reload(false);
    }
  };

  if (reditect) {
    return <Redirect to="/" />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="error-message">{message}</div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Login;
