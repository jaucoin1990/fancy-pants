import React from "react";

import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import image from "./nerd.png";

function Contact({ about, skill, contact }) {
  return (
    <div className="container__container">
      <div className="container__card">
        <div className="container__head">
          <div className="container__headBg"></div>
          <img className="container__avatar" src={image} alt="" />
          <div className="container__name">
            <h1>Jeremy Aucoin</h1>
            <p>Product Owner & Designer</p>
          </div>
        </div>
        <div className="container__main">
          <h3>Contact</h3>
          <p>
            If something piques your interest, please reach out. I'd be happy to
            chat with you.
          </p>
          <br></br>
          <div className="contact__info">
            <div>
              <LocationOnOutlinedIcon className="container__icon" />
              <p>Open to remote opportunities.</p>
            </div>
            <div>
              <EmailOutlinedIcon className="container__icon" />
              <p>jmaucoin90@gmail.com</p>
            </div>
            <div>
              <LinkedInIcon className="container__icon" />
              <p>
                Reach out on{" "}
                <a
                  href="https://www.linkedin.com/in/jeremy-aucoin-83aa981b1/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="button__container">
          <div className="skillButton__about" onClick={about}>
            About
          </div>
          <div className="contactButton__skills" onClick={skill}>
            Skills
          </div>
          <div className="contactButton__contact" onClick={contact}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
