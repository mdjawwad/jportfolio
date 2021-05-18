import React from "react";
import aboutImg from "../img/avatar.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={aboutImg} alt="/" />
      </div>
      <div className="about-info">
        <h4>
          It's <span> Muhammed Jawwad</span>
        </h4>
        <p className="about-pera">
          A web designer/developer focused on crafting great web experiences.
          Designing and Coding have been my passion since the days I started
          working with computers but I found myself into web design/development
          since 2018. I enjoy creating beautifully designed, intuitive and
          functional websites.
        </p>

        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Email</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Countries</p>
            <p>Full Address</p>
          </div>
          <div className="right-section">
            <p>: Muhammed Jawwad Faisal</p>
            <p>: 21</p>
            <p>: mdjawwad790@gmail.com</p>
            <p>: India</p>
            <p>: Hindi, Urdu, English</p>
            <p>: Mumbai, Pune, Hydrabad</p>
            <p>: New city, 431604 Nanded, Mahrashtra, India</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
      <div className="skill-con">
        <div className="skils"></div>
      </div>
    </div>
  );
}

export default ImageSection;
