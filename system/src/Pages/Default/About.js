import React from "react";
import { Link } from "react-router-dom";
import "../Default/about.css";
import Footer from "../../Components/Footer/Footer";
function About() {
  return (
    <div className="navigation">
      <nav>
        <Link to="/">
          <img src="img/mergedlogo.png" height={170} />
        </Link>
        <div className="conttwo">
          <label for="toggle">&#9776;</label>

          <input type="checkbox" id="toggle" />
          <div className="navlinks">
            <ul>
              <Link to="/">
                <li className="li">HOME</li>
              </Link>
              <Link to="/About">
                <li className="li">ABOUT</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* Aboutinfo */}
      <div className="row">
        <div className="cource-col">
          <h1>School name</h1>
          <p>PAMANTASAN NG LUNSOD NG SAN PABLO</p>
        </div>
        <div className="cource-col">
          <h1>Vision</h1>
          <p>A University producing competent and competitive graduates</p>
        </div>
        <div className="cource-col">
          <h1>Mission</h1>
          <p>
            To provide well-balanced and relevant educational program fortified
            with strong Filipino values and ideals.
          </p>
        </div>
      </div>
      <div className="row2">
        <div className="cource-col">
          <h1>Address</h1>
          <p>
            Brgy. San Jose 4000 San Pablo City, Philippines <br></br> Telephone
            No: (049) 800 3286
          </p>
        </div>
        <div className="cource-col">
          <h1>Official website</h1>
          <a href="https://www.facebook.com/PLSPOfficialFBPage/about/?ref=page_internal">
            PLSPOfficialPage
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
