import React from "react";
import "./style.css";
import clouds from "./clouds.png"


function Hero() {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${clouds})` }}>

      <h1>The Healthy Human Project</h1>
        <h2>Driving data towards a healthy future</h2>
    </div>
    
  );
}

export default Hero;
