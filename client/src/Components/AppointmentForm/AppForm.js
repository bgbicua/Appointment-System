import React, { useState, useEffect } from "react";
import axios from "axios";
function AppForm() {
  const initialState = {
    Date: "",
    Time: []
  };

  const [state, setState] = useState(initialState);
  const [time, setTime] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleAddTime = () => {
    setState((prev) => {
      return { ...prev, Time: [...prev.Time, { Student: "", Time: time }] };
    });
    setTime("");
  };
  const handleSubmit = () => {
    console.log(state);
    axios
      .post(`${process.env.REACT_APP_KEY}/insertApp`, state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Hello from admin</h1>

      <h4>Post Appointment as registrar</h4>

      <div>
        <label>Date</label>
        <input
          type="date"
          name="Date"
          id=""
          value={state.Date}
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          type="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          value={time}
        />
        <div className="btnflex">
          <button
            className="btnGreen"
            onClick={() => {
              handleAddTime();
            }}
          >
            Add Time
          </button>
          <button
            className="btnGreen"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppForm;
