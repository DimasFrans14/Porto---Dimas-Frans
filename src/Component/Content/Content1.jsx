import { React, useState, useEffect }from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "react-bootstrap/Button";
import { Typewriter } from "react-simple-typewriter";
import TextTransition, { presets } from "react-text-transition";

export default function Content1() {

  const text = ['Dimas Frans Shehmit', 'Front End Dev Enthusiast', 'Informatics Engineering Student']

  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => index + 1)  
    }, 3500);
  
  
    return () => {
      clearTimeout(intervalId)
    };
  }, []);

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
            <p className="top-title">Hi There!</p>
            <div className="text-animation-onDesktop">
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
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            </div>
              <div className="text-animation-onMobile">
                <p>
                <TextTransition springConfig={presets.wobbly} className="text-animation-mobile">
                  {text[index % text.length]}
              </TextTransition>
                </p>
            </div>
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
        <div className="shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
        </div>
    </>
  );
}
