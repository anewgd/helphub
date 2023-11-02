//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import Agent from "./components/Agent";
import Client from "./components/Client";
import Admin from "./components/Admin";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   position: "relative",
      //   height: "600px",
      // }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/agent" element={<Agent />} />
            <Route exact path="/client" element={<Client />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

const LoginContainer = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: "600px",
    }}
  >
    <Route exact path="/" element={<Login />} />
    <Route path="/login" component={Login} />
  </div>
);
