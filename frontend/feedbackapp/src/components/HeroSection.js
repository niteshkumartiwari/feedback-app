import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/cover.mp4" autoPlay loop muted />
      <h1>Grow Personally</h1>
      <p>Lets help each other grow!</p>
    </div>
  );
}

export default HeroSection;
