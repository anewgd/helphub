import React, { useState } from "react";
import logo from "../icons/Logo.svg";
import "../styles/Register.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

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
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="register-logo-container">
          <img src={logo} alt="helphub logo" />
        </div>
        <form className="registration-form">
          <div className="grid">
            <div className="registration-field-container">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={(e) => handleChange(e)}
                value={firstName}
              />
            </div>
            <div className="registration-field-container">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={(e) => handleChange(e)}
                value={lastName}
              />
            </div>
            <div className="registration-field-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={email}
              />
            </div>
            <div className="registration-field-container">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => handleChange(e)}
                value={username}
              />
            </div>
            <div className="registration-field-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={password}
              />
            </div>
            <div className="registration-field-container">
              <input
                type="password"
                name="secondPassword"
                placeholder="Re-enter password"
                onChange={(e) => handleChange(e)}
                value={secondPassword}
              />
            </div>
          </div>
          <div className="button-container">
            <input
              className="button"
              type="submit"
              value="Register"
              //onClick={(e) => handleSubmit(e)}
            />
          </div>
        </form>
        <div className="registration-redirect-container">
          <a href="/">Go to Login</a>
        </div>
      </div>
    </>
  );
}
