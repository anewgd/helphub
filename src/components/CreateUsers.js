import React, { useState } from "react";

import "../styles/CreateUsers.css";
export default function CreateUsers() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "secondPassword":
        setSecondPassword(e.target.value);
        break;
      case "userType":
        setUserType(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userType);
  };

  return (
    <>
      <div className="admin-CreateUsers-container">
        <div className="admin-CreateUsers-form-container"></div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="admin-CreateUsers-form"
        >
          <div className="admin-CreateUsers-form-field">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="admin-CreateUsers-form-field">
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="admin-CreateUsers-form-field">
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="admin-CreateUsers-form-field">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="admin-CreateUsers-form-field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="admin-CreateUsers-form-field">
            <input
              type="password"
              placeholder="Re-enter password"
              name="secondPassword"
              value={secondPassword}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="admin-CreateUsers-form-field">
            <select name="userType" onChange={(e) => handleChange(e)} required>
              <option default value="">
                Choose user type..
              </option>
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div id="createUsers-button" className="admin-CreateUsers-form-field">
            <input type="submit" value="Create user" />
          </div>
        </form>
      </div>
    </>
  );
}
