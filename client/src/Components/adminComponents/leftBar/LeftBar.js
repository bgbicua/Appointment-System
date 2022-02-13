import React from "react";
import { RiDashboardFill, RiLogoutCircleRLine } from "react-icons/ri";
import { DiAptana } from "react-icons/di";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import "./leftbar.css";
function LeftBar({ setToggle, toggle }) {
  const clickDash = () => {
    setToggle({
      Dashboard: true,
      Appointment: false,
      Configuration: false
    });
  };

  const clickApp = () => {
    setToggle({
      Dashboard: false,
      Appointment: true,
      Configuration: false
    });
  };
  const clickConfig = () => {
    setToggle({
      Dashboard: false,
      Appointment: false,
      Configuration: true
    });
  };

  return (
    <div className="masterLeftBar">
      <h4 className="adname">Admin Name</h4>

      <ul>
        <li>
          <div
            className="linkcard"
            onClick={() => {
              clickDash();
            }}
          >
            <RiDashboardFill />
            <h4>Dashboard</h4>
          </div>
        </li>
        <li>
          <div
            className="linkcard"
            onClick={() => {
              clickApp();
            }}
          >
            <BsFillCalendar2CheckFill />
            <h4>Appointments</h4>
          </div>
        </li>
        <li>
          <div
            className="linkcard"
            onClick={() => {
              clickConfig();
            }}
          >
            <DiAptana />
            <h4>Configuration</h4>
          </div>
        </li>
        <li>
          <li>
            <div className="linkcard">
              <RiLogoutCircleRLine />
              <h4>Log-out</h4>
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default LeftBar;
