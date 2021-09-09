import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [notificationNumber, setNotificationNumber] = useState(0);
  const id = String(props.userId);
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setName("");
  };

  const getNotificationNumber = async () => {
    const response = await fetch("http://localhost:8000/api/getnotifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      credentials: "include",
    });
    const content = await response.json();
    setNotificationNumber(String(content));
  };

  const resetNotifications = () => {
    if (notificationNumber > 0) {
      fetch("http://localhost:8000/api/resetnotifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });

      setNotificationNumber(0);
    }
  };
  if (id !== undefined && id !== "undefined") {
    getNotificationNumber();
  }
  let menu;

  if (props.name === "" || props.name === undefined) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/myqa" className="nav-link" onClick={resetNotifications}>
            <span
              class="badge badge-pill x-5"
              style={{ backgroundColor: "orange", marginRight: "0.5em" }}
              // ubaciti {notificationNumber} i u Navu ce biti funkcija koja ce ovo updateovati
            >
              {notificationNumber}
            </span>
            My Q&A
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark mb-4"
      style={{ backgroundColor: "#00124d" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <Link to="/questions" className="nav-link">
              Questions
            </Link>
          </li>
        </ul>
        <div>{menu}</div>
      </div>
    </nav>
  );
};

export default Nav;
