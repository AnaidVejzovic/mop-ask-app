import React, { useState } from "react";
import { Redirect } from "react-router";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reditect, setRedirect] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmailAddress = (input) => {
    const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(input)) {
      return 1;
    } else {
      return -1;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (validateEmailAddress(email) === -1) {
      setMessage("Invalid email");
    } else if (password.length < 5) {
      setMessage("Password must have at least 5 characters");
    } else {
      await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      setRedirect(true);
    }
  };
  if (reditect) {
    return <Redirect to="/login" />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
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
          Submit
        </button>
      </form>
    </main>
  );
};

export default Register;
