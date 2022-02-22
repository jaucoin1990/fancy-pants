import React from "react";
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
            <p>Product Owner & Designer</p>
          </div>
        </div>
        <div className="skill__main">
          <div className="skill__mySkills">
            <div className="skill__span">
              <span className="skill__firstRow">react</span>
              <span className="skill__firstRow">node</span>
              <span className="skill__firstRow">redux</span>
              <span>flexbox</span>
              <span>grid</span>
              <span>responsive</span>
            </div>
            <div>
              To showcase these skills, I built a{" "}
              <a href="https://linkedin-clone-c57dd.web.app/" target="_blank">
                LinkedIn clone
              </a>{" "}
              using the technologies above.
            </div>
          </div>
          <div className="skill__mySkills">
            <div className="skill__span">
              <span>keyframes</span>
              <span>design</span>
              <span>animation</span>
              <span>three.js</span>
              <span>scss</span>
              <span>sass</span>
            </div>
            <div>
              To showcase these skills, I built a{" "}
              <a href="https://resume-9faa3.web.app" target="_blank">
                {" "}
                3d resume
              </a>
              . Please view 3d resume on desktop. I also created a{" "}
              <a
                href="https://codepen.io/jaucoin1990/pen/wvrQRRm"
                target="_blank"
              >
                code snippet
              </a>{" "}
              using css animations and keyframes.
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
