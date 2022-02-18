import React, { useState, useEffect } from "react";
import axios from "axios";
import "./appform.css";
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
    <div className="masterAppform">
      <div className="h-3/4 flex flex-col justify-evenly p-4 border-2 shadow rounded bg-slate-200">
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
            className="btnGreen ml-4"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div>
        <h4>{state.Date}</h4>
        <ul>
          {state.Time.map((t) => {
            return <li>{t.Time}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default AppForm;
