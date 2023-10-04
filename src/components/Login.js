import axios from "axios";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Admin from "./Admin";
import Agent from "./Agent";
import Client from "./Client";

import "../styles/Login.css";

// export default class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",

//       message: "",
//       hasError: false,
//       completed: false,
//       userRole: "",
//     };
//   }

//   navigate = useNavigate();

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     let user = {
//       username: this.state.username,
//       password: this.state.password,
//     };

//     axios({
//       method: "post",
//       url: "/login",
//       data: user,
//     })
//       .then((res) => {
//         console.log(`/${res.data.role.toLowerCase()}`);
//         this.setState({
//           completed: true,
//           message: user.username,
//           userRole: res.data.role,
//         });
//         this.navigate.push(`/${this.state.userRole}`);
//       })
//       .catch((err) => {
//         this.setState({ completed: true, message: err.response.data.message });
//         console.log(err.response.data.message);
//       });
//     console.log(this.state);
//   };

//   // navigate = (userRole) => {
//   //   switch (userRole) {
//   //     case "ADMIN":
//   //       return <Route exact path="/admin" element={<Admin />} />;
//   //       break;
//   //     case "CLIENT":
//   //       return <Route exact path="/client" element={<Client />} />;
//   //       break;
//   //     case "AGENT":
//   //       return <Route exact path="/agent" element={<Agent />} />;
//   //       break;
//   //     default:
//   //       return <Route exact path="/" element={<Login />} />;
//   //       break;
//   //   }
//   // };
//   render() {
//     return (
//       <div>
//         {this.state.completed ? <h1>User found</h1> : <></>}
//         <form>
//           <label>
//             Username:
//             <input
//               type="text"
//               name="username"
//               onChange={this.handleChange}
//               value={this.state.username}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="Login" onClick={this.handleSubmit} />
//         </form>
//       </div>
//     );
//   }
// }

import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (userRole) {
      console.log({
        username,
        password,
        message,
        hasError,
        completed,
        userRole,
      });
      navigate(`/${userRole.toLowerCase()}`);
    }
  }, [userRole]);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      username: username,
      password: password,
    };

    axios({
      method: "post",
      url: "/login",
      data: user,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("currentUser", JSON.stringify(res.data.data));
        setUserRole(res.data.data.role);
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
        }
      });
  };

  return (
    <div className="main-container">
      <div className="title">
        <p>CRM App</p>
      </div>
      {completed ? <h1>User found</h1> : <></>}
      <form>
        <div>
          <label>
            Username:
            <div className="input-container">
              <input
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                value={username}
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            Password:
            <div className="input-container">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </label>
        </div>
        <div className="button-container">
          <input
            className="button"
            type="submit"
            value="Login"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </form>
    </div>
  );
}
