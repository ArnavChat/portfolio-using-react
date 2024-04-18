import "../../css/AboutMe.css";
import React from "react";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <section id="about-me">
        <div className="odd-left-container">
          <img
            src="/profile-image.jpg"
            alt="profile-image"
            className="profile-image"
          />
          <h1>Arnav Chaturvedi</h1>
          <p>Web Developer</p>
          <br />
          <a href="mailto:arnavchaturvedi2004@gmail.com">
            <button className="btn">Email Me</button>
          </a>

          <div className="social-icons">
            <a href="http://www.linkedin.com/in/arnavchaturvedi21">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ArnavChat">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="odd-right-container">
          <h1>About Me</h1>
          <p>
            I am a tech-savvy individual undergoing a Bachelor's degree in
            Computer Science Engineering at Vellore Institute of Technology,
            Vellore, seeking internship as a web developer. I am passionate
            about consistently advancing my knowledge and skills.
          </p>
          <div className="abt-me-btn">
            <NavLink to="/hobbies">
              <button className="hobbies-btn">My Hobbies</button>
            </NavLink>
            <a href="https://drive.google.com/file/d/1jIZDpJxMGmk-Og-SsZuHV2kECHenzLWt/view?usp=drive_link" target="_blank">
              <button className="resume-btn">My Resume</button>
            </a>
          </div>
        </div>
      </section>
      <hr style={{ width: "10%", borderTop: "dotted 5px", color: "#504d4d" }} />
    </div>
  );
}

export default AboutMe;
