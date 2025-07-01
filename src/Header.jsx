import React from "react";
import { Send } from "lucide-react";
// import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-section">
          <Send size={28} color="#2563eb" />
          <div>
            <h2>BusTracker Pro</h2>
            <p>Real-time GPS Bus Tracking System</p>
          </div>
        </div>
        <button className="demo-button">Request Demo</button>
      </header>

      <section className="hero">
        <h1>Live GPS Bus Tracking Demo</h1>
        <p>
          Experience our real-time bus tracking system built with the <strong>MERN</strong> stack.
          Watch buses move in real-time on actual city streets with GPS precision.
        </p>
      </section>
    </>
  );
};

export default Header;
