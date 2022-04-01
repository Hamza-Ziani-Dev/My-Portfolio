import React from "react";
import about from "../img/image2.jpg";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Hamza Ziani </span>
        </h4>
        <p>
          I'm full-stack Web developer with 3
          years of experience and working as a freelancer
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name </p>
            <p>Age</p>
            <p>My Email</p>
            <p>Languages</p>
            <p>Address </p>
            <p>Nationality</p>
          </div>
          <div className="right-section">
            <p>: Hamza Ziani</p>
            <p>: 25 years old</p>
            <p>: hamzaziani.dev@gmail.com</p>
            <p>: Arabic, Frensh, English</p>
            <p>: casablanca, Morocco </p>
            <p>: Morrocan</p>
          </div>
        </div>
        <form action="/CV.pdf" method="get">
          <button className="btn">Download CV</button>
        </form>
      </div>
    </div>
  );
}

export default ImageSection;
