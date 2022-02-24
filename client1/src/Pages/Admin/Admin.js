import React, { useState, useEffect } from "react";
import AppointmentForm from "../../Components/AppointmentForm/AppForm";
import "./admin.css";
import LeftBar from "../../Components/adminComponents/leftBar/LeftBar";
import Appointment from "../../Components/adminComponents/Appointment/Appointment";
import Dashboard from "../../Components/adminComponents/Dashboard/Dashboard";
import Configuration from "../../Components/adminComponents/Configuration/Configuration";
import AddAppointment from "../../Components/adminComponents/Appointment/AddAppointment";
import EditAppointment from "../../Components/adminComponents/Appointment/EditAppointment";
function Admin() {
  const [toggle, setToggle] = useState({
    Dashboard: true,
    Appointment: false,
    Configuration: false,
    Add: false,
    Edit: false
  });
  return (
    <div className="masterAdmin">
      <div className="leftBar">
        <LeftBar toggle={toggle} setToggle={setToggle} />
      </div>

      <div className="rightBar">
        {toggle.Dashboard ? <Dashboard /> : null}

        {toggle.Appointment ? <Appointment /> : null}

        {toggle.Configuration ? <Configuration /> : null}
        {toggle.Add ? <AddAppointment /> : null}
        {toggle.Edit ? <EditAppointment /> : null}
      </div>
    </div>
  );
}

export default Admin;
