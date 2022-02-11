import React, { useState, useEffect } from "react";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import "./portal.css";
function Portal() {
  let history = useNavigate();

  const initialState = {
    Email: "",
    Password: ""
  };
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.Email && state.Password) {
      if (validator.isEmail(state.Email)) {
        history("/about");
      } else {
        alert("Your Email is not valid");
      }
    } else {
      alert("Please Fill up all the fields");
    }
  };

  return (
    <div className="portalMaster">
      <div className="portalContainer">
        <div className="logo">
          <img src="./img/logo1.png" alt="" />
          <h1>Admin Portal</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="portalForm">
          <label>Email</label>
          <input
            type="text"
            onChange={handleChange}
            name="Email"
            value={state.Email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="Password"
            value={state.Password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Portal;
