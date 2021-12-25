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
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
