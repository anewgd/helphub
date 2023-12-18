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
      <main className="register-container">
        <section className="register-logo-container">
          <img src={logo} alt="helphub logo" />
        </section>
        <section className="register-content-container">
          <form className="registration-form">
            <h1>Create your account.</h1>
            <div className="registration-field-container">
              <div className="register-input">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={(e) => handleChange(e)}
                  value={firstName}
                />
              </div>
            </div>
            <div className="registration-field-container">
              <div className="register-input">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={(e) => handleChange(e)}
                  value={lastName}
                />
              </div>
            </div>
            <div className="registration-field-container">
              <div className="register-input">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => handleChange(e)}
                  value={email}
                />
              </div>
            </div>
            <div className="registration-field-container">
              <div className="register-input">
                <input
                  type="text"
                  name="username"
                  placeholder="Create username"
                  onChange={(e) => handleChange(e)}
                  value={username}
                />
              </div>
            </div>
            <div className="registration-field-container">
              <div className="register-input">
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  onChange={(e) => handleChange(e)}
                  value={password}
                />
              </div>
            </div>
            <div className="registration-field-container">
              <div className="register-input">
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
                className="registration-button"
                type="submit"
                name="registration-btn"
                value="Register"
                //onClick={(e) => handleSubmit(e)}
              />
            </div>
          </form>
          <div className="registration-redirect-container">
            <div className="link">
              <a href="/">Login to your account</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
