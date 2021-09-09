import React, { useState } from "react";
const Profile = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const email = props.email;
  const validateEmailAddress = (input) => {
    const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(input)) {
      return 1;
    } else {
      return -1;
    }
  };
  const submitPassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 5) {
      setMessage("Password must have at least 5 characters");
      return;
    }
    const response = await fetch(" http://localhost:8000/api/changepassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, oldPassword, newPassword }),
    });
    const content = await response.json();
    if (content.message !== "success") {
      setPasswordMessage(content.message);
    }
  };

  const submitFirstName = async (e) => {
    e.preventDefault();
    if (firstName.length === 0) {
      setMessage("Please enter a name");
      return;
    }
    const response = await fetch(" http://localhost:8000/api/changefirstname", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ firstName, email }),
    });
    const content = await response.json();
    if (content.message !== "success") {
      setMessage(content.message);
    }
  };

  const submitLastName = async (e) => {
    e.preventDefault();
    if (lastName.length === 0) {
      setMessage("Please enter a name");
      return;
    }
    const response = await fetch(" http://localhost:8000/api/changelastname", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ lastName, email }),
    });
    const content = await response.json();
    if (content.message !== "success") {
      setMessage(content.message);
    }
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    if (validateEmailAddress(newEmail) === -1) {
      setMessage("Invalid email");
      return;
    } else {
      const response = await fetch(" http://localhost:8000/api/changeemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, newEmail }),
      });
      const content = await response.json();
      if (content.message !== "success") {
        setMessage(content.message);
      }
    }
  };

  return (
    <main className="form-signin">
      <div className="profile-info">
        <h3>
          {props.firstName} {props.lastName}
        </h3>
        <p>{props.email}</p>
      </div>
      <br />
      <br />
      <h5>Change Password</h5>
      <form onSubmit={submitPassword}>
        <input
          type="password"
          className="form-control"
          placeholder="Old password"
          required
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="New password"
          required
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
        <div className="error-message">{passwordMessage}</div>
      </form>

      <br />
      <br />
      <br />

      <h5>Change User Info</h5>
      <form onSubmit={submitFirstName}>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Change First Name
        </button>
      </form>

      <br />
      <form onSubmit={submitLastName}>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Change Last Name
        </button>
      </form>
      <br />

      <form onSubmit={submitEmail}>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          required
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Change Email
        </button>
        <div className="error-message">{message}</div>
      </form>
    </main>
  );
};

export default Profile;
