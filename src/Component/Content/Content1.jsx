import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "react-bootstrap/Button";
import { Typewriter } from "react-simple-typewriter";

export default function Content1() {
  return (
    <>
      <div className="content-1">
        <div className="row text-hero">
          <div
            className="col-lg-7 col-sm-12 desc-hero"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <p>Hi There!</p>
            <p className="sub-text-hero">
              I'm{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "Dimas Frans Shehmit",
                    "Informatic Engineerin Student",
                    "Front End Dev Enthusiast",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <a
              href="https://www.instagram.com/dimasfranss_/"
              className="icon-instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/dimas-frans-shehmit/"
              className="icon-linkedin"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/dmsfrns_" className="icon-twitter">
              <FaTwitter />
            </a>
            <br />
            <Button variant="success" href="#about">
              <span className="text-button">Get in Touch!</span>
            </Button>
          </div>
          <div
            className="col-4 offset-1 icon-hero"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Player
              src="https://assets2.lottiefiles.com/temp/lf20_R4avlk.json"
              className="player"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </>
  );
}
