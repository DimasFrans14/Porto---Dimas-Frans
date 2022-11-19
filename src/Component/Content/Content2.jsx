import React from "react";
import hero from "../../assets/img/hero.png";

export default function Content2() {
  return (
    <div className="content-2" id="about">
      <h2 className="text-center text-dark">About Me</h2>
      <div className="row align-items-center">
        <div
          className="col-lg-5 offset-1 icon-hero2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src={hero} alt="me" />
        </div>
        <div
          className="col-lg-6 col-sm-12"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="about-me">
            I'm Dimas Frans Shehmit and i'm a student at the Mercu Buana
            University. I have an interest in the field of website development,
            especially in front end development. I have proficiency in{" "}
            <span className="text-success">
              HTML, CSS, Javascript, Bootstrap and fundamentals in Reactjs and
              Nextjs
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
