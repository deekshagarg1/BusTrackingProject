import React from "react";
// import "./AboutFooter.css";
// import profileImage from "./vivek.jpg"; // Replace with the actual image path

const AboutFooter = () => {
  return (
    <footer className="about-footer">
        <img src="/download.png" alt="" className="footer-img"  />
      {/* <img src={profileImage} alt="Vivek Singh Tomar" className="footer-img" /> */}
      <div className="footer-text">
        <p><strong>Vivek Singh Tomar</strong></p>
        <p>B.Tech CSE | 3rd Semester, 2nd Year</p>
        <p>Vikrant University, Gwalior</p>
      </div>
    </footer>
  );
};

export default AboutFooter;
