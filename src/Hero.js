import react, { useState } from "react";
import About from "./About";
import Skill from "./Skill";
import Contact from "./Contact";
import "./Hero.css";

function Hero() {
  let [page, setPage] = useState("about");

  const aboutClickHandler = () => {
    setPage("about");
  };

  const skillClickHandler = () => {
    setPage("skill");
  };

  const contactClickHandler = () => {
    setPage("contact");
  };
  return (
    <div className="container">
      <div></div>
      {page === "about" && (
        <About
          about={aboutClickHandler}
          skill={skillClickHandler}
          contact={contactClickHandler}
        />
      )}
      {page === "skill" && (
        <Skill
          about={aboutClickHandler}
          skill={skillClickHandler}
          contact={contactClickHandler}
        />
      )}
      {page === "contact" && (
        <Contact
          about={aboutClickHandler}
          skill={skillClickHandler}
          contact={contactClickHandler}
        />
      )}
    </div>
  );
}

export default Hero;
