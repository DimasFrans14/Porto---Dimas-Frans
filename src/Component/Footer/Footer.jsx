import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer text-center'>
        <h2>Dimas Frans Shehmit</h2>
        <p>Front End Dev Enthusiast</p>
        <a href="https://www.instagram.com/dimasfranss_/" className="icon-instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/dimas-frans-shehmit/" className="icon-linkedin">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/dmsfrns_" className="icon-twitter">
            <FaTwitter />
          </a>
    </div>
  )
}
