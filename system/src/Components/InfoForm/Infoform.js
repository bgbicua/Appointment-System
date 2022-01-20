import React, { useState, useEffect } from "react";
import "../InfoForm/infoform.css";
import Footer from "../Footer/Footer";

function Infoform() {
  const initialForm = {
    Name: "",
    Age: 0,
    StudentID: "",
    YearandCourse: "",
    Admin: "",
    Purpose: ""
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form className="infoform" onSubmit={submit}>
        <label>Name</label>
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
        <label> Year and Course</label>
        <input
          type="text"
          name="YearandCourse"
          placeholder="ex. B.S. Information Tech. 4"
          onChange={handleChange}
          value={form.YearandCourse}
        />
        <label> Office of: </label>
        <select name="Admin" onChange={handleChange} value={form.Admin}>
          <option value="Admission">Admission</option>
          <option value="Registrar">Registrar</option>
        </select>
        <label> Purpose: </label>
        <select name="Purpose" onChange={handleChange} value={form.Purpose_}>
          <option value="Transcript of Records">Transcript of Records</option>
          <option value="Transfer Credentials">Transfer Credentials</option>
          <option value="Certification of Grades">
            Certification of Grades
          </option>
          <option value="Certification of Graduation">
            Certification of Graduation
          </option>
          <option value="Certification of Enrollment">
            Certification of Enrollment
          </option>
          <option value="Certification of Honor">Certification of Honor</option>
          <option value="Certification, Authentication and Verification">
            Certification, Authentication and Verification
          </option>
          <option value="Authentication of TOR/Dimploma">
            Authentication of TOR/Dimploma
          </option>
          <option value="Diploma">Diploma</option>
          <option value="Enrollment">Enrollment</option>
        </select>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Infoform;
