import React from "react";
import "./About.css";
import image from "./nerd.png";

function About({ about, skill, contact }) {
  return (
    <div className="about__container">
      <div className="about__card">
        <div className="about__head">
          <div className="about__headBg"></div>
          <img className="about__avatar" src={image} alt="" />
        </div>
        <div className="about__name">
          <h1>Jeremy Aucoin</h1>
          <p>Product Owner & Designer</p>
        </div>
        <div className="about__main">
          <h3>About</h3>
          <p>
            I'm a dad, husband, brother, and son. I'm a life-longer learner who
            loves tech. I have over six years of experience in product design
            and management. My professional passions include React, CSS, and
            SQL.
          </p>
          <p>
            Outside of work and spending time with my family and friends, my
            hobbies include watching movies and staying in shape.
          </p>
        </div>
        <div className="button__container">
          <div className="aboutButton__about" onClick={about}>
            About
          </div>
          <div className="aboutButton__skills" onClick={skill}>
            Skills
          </div>
          <div className="aboutButton__contact" onClick={contact}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
