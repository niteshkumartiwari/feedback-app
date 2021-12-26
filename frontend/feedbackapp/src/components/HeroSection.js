import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function HeroSection(props) {
  return (
    <div className="hero-container">
      <video src="/videos/cover.mp4" autoPlay loop muted />
      <h1>Grow Personally</h1>
      <p>Lets help each other grow!</p>
      <br />
      <Button buttonStyle="btn--outline"> SIGN UP </Button>
    </div>
  );
}

export default HeroSection;
