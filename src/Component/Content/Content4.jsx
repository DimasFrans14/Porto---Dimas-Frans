import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaHtml5, FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function Content4() {
  return (
    <div className="content-4" id="skills">
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-center text-dark">My Skills</h2>
      <div className="row align-items-center">
        <div
          className="col-lg-5"
          data-aos="flip-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <ul className="list-mobile">
            <li className="list-html">
              <FaHtml5 />
              <span className="ms-2">HTML</span>
            </li>
            <li className="list-css">
              <FaCss3 />
              <span className="ms-2">CSS</span>
            </li>
            <li className="list-javascript">
              <SiJavascript />
              <span className="ms-2">Javascript</span>
            </li>
            <li className="list-bootstrap">
              <FaBootstrap />
              <span className="ms-2">Bootstrap</span>
            </li>
            <li className="list-react">
              <FaReact />
              <span className="ms-2">React JS</span>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 offset-1 icon-skills"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Player
            src="https://assets9.lottiefiles.com/packages/lf20_cmaqoazd.json"
            className="player"
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}
