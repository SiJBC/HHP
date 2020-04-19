import React, { Component } from "react";
import Hero from "../Hero"
import Card from "../card";

class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Card/>

      </div>
    );
  }
}

export default Landing;
