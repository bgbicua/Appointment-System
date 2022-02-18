import React, { useState, useEffect } from "react";
import "../InfoForm/infoform.css";
import Footer from "../Footer/Footer";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function Infoform() {
  const initialForm = {
    Name: "",
    Age: 0,
    StudentID: "",
    Year: "",
    Course: "",
    Admin: "",
    Purpose: []
  };

  const [form, setForm] = useState(initialForm);
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (
      !form.Name ||
      !form.Age ||
      !form.Course ||
      !form.StudentID ||
      !form.Year
    ) {
      alert("Please fill up all the fields");
    } else {
      setCurrent(1);
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
    setCurrent(1);
  };
  const prev = () => {
    setCurrent(0);
  };
  const submit = () => {
    console.log(form);
    setForm(initialForm);
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
            <select name="Course" onChange={handleChange} value={form.Course}>
              <option value="">Select Course</option>
              <option value="Curse 1">Curse 1</option>
              <option value="Curse 2">Curse 2</option>
              <option value="Curse 3">Curse 3</option>
              <option value="Curse 4">Curse 4</option>
            </select>
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
            <select name="Admin" onChange={handleChange} value={form.Admin}>
              <option value="">Select Office</option>
              <option value="Admission">Admission</option>
              <option value="Registrar">Registrar</option>
            </select>
            <label>Purpose</label>

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
