import React from "react";
import Bike from "./Bike";
import "./Skill.css";
import image from "./nerd.png";

function Skill({ about, skill, contact }) {
  return (
    <div className="skill__container">
      <div className="skill__card">
        <div className="skill__head">
          <div className="skill__headBg"></div>
          <img className="skill__avatar" src={image} alt="" />
          <div className="skill__name">
            <h1>Jeremy Aucoin</h1>
            <p>Product Owner & UI/UX Developer</p>
          </div>
        </div>
        <div className="skill__main">
          <h3>Skills in trending tech</h3>
          <div className="skill__mySkills">
            <div className="skill__span">
              <span>react w/ hooks</span>
              <span>redux</span>
              <span>node / npm</span>
              <span>grid</span>
              <span>flexbox</span>
              <span>media queries</span>
            </div>
            <div>
              To show these skills, I built a LinkedIn clone using React
              (including hooks), Redux, Flexbox, Grid and media queries. View my
              LinkedIn clone{" "}
              <a href="https://linkedin-clone-c57dd.web.app/" target="_blank">
                here
              </a>
              .
            </div>
          </div>
          <h3>Skills in animation and design</h3>
          <div className="skill__mySkills">
            <div className="skill__span">
              <span>keyframes</span>
              <span>creativity</span>
              <span>design</span>
            </div>
            <div>
              To show these skills, I created a code snippet using css
              animations and keyframes. View my Codepen{" "}
              <a
                href="https://codepen.io/jaucoin1990/pen/wvrQRRm"
                target="_blank"
              >
                {" "}
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="button__container">
          <div className="skillButton__about" onClick={about}>
            About
          </div>
          <div className="skillButton__skills" onClick={skill}>
            Skills
          </div>
          <div className="skillButton__contact" onClick={contact}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
