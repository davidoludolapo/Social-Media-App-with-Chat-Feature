import React from "react";
import { useRef } from "react";
import "./register.css";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate('/login')

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Verscial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Verscial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Username"
              className="loginInput"
              ref={username}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
              ref={confirmPassword}
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">Log in here</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
