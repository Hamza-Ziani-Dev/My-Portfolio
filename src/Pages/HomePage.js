/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Typical from "react-typical";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hii, I am
          <Typical
            steps={[
              " Hamza Ziani",
              1000,
              " React && Angular && Django Lover",
              1000,
              " Full Stack devlopper",
              1000,
              " Mern Full Stack",
              1000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
          <p className="h-sub-text">
            I am full-stack Web developer with 5 years of experience,
            I am full-stack Web developer with 5 years of experience
          </p>
          <div class="btn-home">
            <a href="/CV.pdf" className="btn" target="_blank">
              Download CV
            </a>
          </div>
          <div className="icons">
            <a href="https://web.facebook.com/profile.php?id=100078393806214" className="icon-holder" target="_blank" >
              <FaFacebook className="icon fb" />
            </a>
            <a
              href="https://github.com/Hamza-Ziani-Dev"
              className="icon-holder"
              target="_blank"
            >
              <FaGithub className="icon gh" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-ziani-b74197231/" className="icon-holder" target="_blank">
              <FaLinkedin className="icon gh" />
            </a>
            <a href="https://twitter.com/DevHamzaZiani" className="icon-holder"
              target="_blank">
              <FaInstagram className="icon ins" />
            </a>
            <a href="https://twitter.com/DevHamzaZiani" className="icon-holder" target="_blank" >
              <FaTwitter className="icon tw" />
            </a>
          </div>
        </h1>
      </header>
    </div>
  );
}

export default HomePage;
