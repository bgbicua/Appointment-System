import React, { useState, useEffect } from "react";
import "../InfoForm/infoform.css";
import axios from "axios";
import Footer from "../Footer/Footer";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import validator from "validator";
function Infoform() {
  let navigate = useNavigate();
  const initialForm = {
    Name: "",
    Age: 0,
    StudentID: "",
    Year: "",
    Course: "",
    Admin: "Admission",
    Purpose: [],
    Type: "",
    Appointment: {
      app: "",
      date: "",
      time: ""
    },
    Email: ""
  };
  const [appointment, setAppointment] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (form.Type == "Student") {
      if (
        !form.Name ||
        !form.Age ||
        !form.Course ||
        !form.StudentID ||
        !form.Year ||
        !form.Email ||
        !form.Type
      ) {
        alert("Please fill up all the fields");
      } else if (!validator.isEmail(form.Email)) {
        alert("Invalid Email");
      } else {
        setCurrent(1);
      }
    } else {
      if (!form.Name || !form.Age || !form.Email || !form.Type) {
        alert("Please fill up all the fields");
      } else if (!validator.isEmail(form.Email)) {
        alert("Invalid Email");
      } else {
        setCurrent(1);
      }
    }
  };
  const nextApp = () => {
    if (form.Purpose.length) {
      setCurrent(2);
    } else {
      alert("Select a Request");
    }
  };
  const prevApp = () => {
    setForm((prev) => {
      return { ...prev, Purpose: "" };
    });
    setCurrent(1);
  };
  const prev = () => {
    setCurrent(0);
  };
  const submit = () => {
    axios
      .post(`${process.env.REACT_APP_KEY}/insertRequest`, form)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    // setForm(initialForm) TODO:;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleCheckChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm((prev) => {
        return { ...prev, Purpose: [...prev.Purpose, value] };
      });
    } else {
      setForm((prev) => {
        return { ...prev, Purpose: prev.Purpose.filter((a) => a != value) };
      });
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_KEY}/getApp`)
      .then((res) => {
        setAppointment(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="masterForm">
      {current == 0 ? (
        <p className="pheader">
          This appointment and scheduling system allocates slots on a first
          come, first served basis. Users accept the responsibility for
          supplying, checking, and verifying the accuracy and correctness of the
          information they provide on this system in connection with their
          application. Incorrect or inaccurate information supplied may result
          in forfeiture of application.
        </p>
      ) : current == 1 ? (
        <p className="pheader">
          Selecting an Office to request & The Purpose of requesting.
        </p>
      ) : current == 2 ? (
        <p className="pheader">
          This appointment and scheduling system allocates slots on a first
          come, first served basis. Users accept the responsibility for
          supplying, checking, and verifying the accuracy and correctness of the
          information they provide on this system in connection with their
          application. Incorrect or inaccurate information supplied may result
          in forfeiture of application.
        </p>
      ) : null}
      <div className="infoform bg">
        {current == 0 ? (
          <div className="personalForm">
            <label>Surename , Firstname , Middlename</label>
            <input
              type="text"
              name="Name"
              placeholder="Surname, FirstName"
              onChange={handleChange}
              value={form.Name}
            />
            <label> Age</label>
            <input
              type="number"
              name="Age"
              onChange={handleChange}
              value={form.Age}
            />
            <label>Email</label>
            <input
              type="email"
              name="Email"
              onChange={handleChange}
              value={form.Email}
            />
            <label>Are you a Student?</label>
            <select name="Type" id="" onChange={handleChange} value={form.Type}>
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Non Student">Non Student</option>
            </select>
            {form.Type == "Student" ? (
              <div>
                <label> Student ID</label>
                <input
                  type="text"
                  name="StudentID"
                  placeholder="ex. 18-0799"
                  onChange={handleChange}
                  value={form.StudentID}
                />
                <label>Year</label>
                <select name="Year" onChange={handleChange} value={form.Year}>
                  <option value="">Select Year</option>
                  <option value="IV">IV Year</option>
                  <option value="III">III Year</option>
                  <option value="II">II Year</option>
                  <option value="I">I Year</option>
                </select>
                <label>Course</label>
                <select
                  name="Course"
                  onChange={handleChange}
                  value={form.Course}
                >
                  <option value="">Select Course</option>
                  <option value="Curse 1">Curse 1</option>
                  <option value="Curse 2">Curse 2</option>
                  <option value="Curse 3">Curse 3</option>
                  <option value="Curse 4">Curse 4</option>
                </select>
              </div>
            ) : null}
            <button
              className="btnGreen"
              onClick={() => {
                next();
              }}
            >
              Next
            </button>
          </div>
        ) : current == 1 ? (
          <div className="purposeDiv">
            <label>Office of</label>
            {form.Type == "Student" ? (
              <select
                name="Admin"
                onChange={(e) => {
                  handleChange(e);
                  setForm((prev) => {
                    return { ...prev, Purpose: "" };
                  });
                }}
                value={form.Admin}
              >
                <option value="Admission">Admission</option>
                <option value="Registrar">Registrar</option>
              </select>
            ) : (
              <select
                name="Admin"
                onChange={(e) => {
                  handleChange(e);
                  setForm((prev) => {
                    return { ...prev, Purpose: "" };
                  });
                }}
                value={form.Admin}
              >
                <option value="Admission">Admission</option>
              </select>
            )}
            <label>Purpose</label>

            {form.Admin == "Registrar" ? (
              <div className="checkContainer">
                <div className="one">
                  <FormControlLabel
                    color="success"
                    value="Transcript of Records"
                    control={<Checkbox />}
                    label="Transcript of Records"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />

                  <FormControlLabel
                    color="success"
                    value="Transfer Credentials"
                    control={<Checkbox />}
                    label="Transfer Credentials"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                  <FormControlLabel
                    color="success"
                    value="Certification of Grades"
                    control={<Checkbox />}
                    label="Certification of Grades"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />

                  <FormControlLabel
                    color="success"
                    value="Certification of Graduation"
                    control={<Checkbox />}
                    label="Certification of Graduation"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                  <FormControlLabel
                    color="success"
                    value="Certification of Enrollment"
                    control={<Checkbox />}
                    label="Certification of Enrollment"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                  <FormControlLabel
                    color="success"
                    value="Certification of Honor"
                    control={<Checkbox />}
                    label="Certification of Honor"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                </div>
                <div className="two">
                  <FormControlLabel
                    color="success"
                    value="Certification, Authentication and Verification"
                    control={<Checkbox />}
                    label="Certification, Authentication and Verification"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                  <FormControlLabel
                    color="success"
                    value="Authentication of TOR/Dimploma"
                    control={<Checkbox />}
                    label="Authentication of TOR/Dimploma"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                  <FormControlLabel
                    color="success"
                    value="Diploma"
                    control={<Checkbox />}
                    label="Diploma"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />

                  <FormControlLabel
                    color="success"
                    value="Enrollment"
                    control={<Checkbox />}
                    label="Enrollment"
                    labelPlacement="start"
                    onChange={handleCheckChange}
                  />
                </div>
              </div>
            ) : (
              <div className="textareadiv">
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="10"
                  value={form.Purpose}
                  onChange={(e) => {
                    setForm((prev) => {
                      return { ...prev, Purpose: e.target.value };
                    });
                  }}
                ></textarea>
              </div>
            )}
            <div className="btnflex">
              <button
                type="submit"
                className="btnGreen"
                onClick={() => {
                  prev();
                }}
              >
                Prev
              </button>
              <button
                type="submit"
                className="btnGreen"
                onClick={() => {
                  nextApp();
                }}
              >
                Next
              </button>
            </div>
          </div>
        ) : current == 2 ? (
          <div className="appCont">
            <div className="amsterapp">
              <div className="timeContainer">
                <h4>Available Time Appointment</h4>
                <div className="timeSubContainer">
                  {form.Appointment.app ? (
                    form.Appointment.app.Time.map((time) => {
                      if (time.Request.Status == "Pending") {
                        return (
                          <div
                            className="cardApp"
                            onClick={() => {
                              console.log(time);
                              setForm((prev) => {
                                return {
                                  ...prev,
                                  Appointment: {
                                    app: prev.Appointment.app,
                                    date: prev.Appointment.date,
                                    time: time.Time
                                  }
                                };
                              });
                            }}
                          >
                            <h4>{moment(time.Time, "hh:mm").format("LT")}</h4>
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <h4>Null</h4>
                          </div>
                        );
                      }
                    })
                  ) : (
                    <div>
                      <h4>Null</h4>
                    </div>
                  )}
                </div>
              </div>
              <div className="dateContainer">
                <h4>Available Date Appointment</h4>
                <div className="dateSubContainer">
                  {appointment &&
                    appointment.map((app) => {
                      var found = false;
                      for (var i = 0; i < app.Time.length; i++) {
                        console.log(app.Time[i].Request.Status);
                        if (app.Time[i].Request.Status == "Pending") {
                          found = true;
                          break;
                        }
                      }
                      if (found) {
                        return (
                          <div
                            style={{
                              border:
                                form.Appointment.app == app
                                  ? "2px solid black"
                                  : null
                            }}
                            key={app._id}
                            className="cardApp"
                            onClick={() => {
                              setForm((prev) => {
                                return {
                                  ...prev,
                                  Appointment: {
                                    app: app,
                                    date: app.Date,
                                    time: ""
                                  }
                                };
                              });
                            }}
                          >
                            <h4>{moment(app.Date).format("MMMM Do YYYY")} </h4>
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <h4>Null</h4>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>

            <div className="btnflex">
              <button
                type="submit"
                className="btnGreen"
                onClick={() => {
                  prevApp();
                }}
              >
                Prev
              </button>
              <button
                type="submit"
                className="btnGreen"
                onClick={() => {
                  submit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Infoform;
