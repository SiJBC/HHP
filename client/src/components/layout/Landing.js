import React, { Component } from "react";
import Hero from "../Hero"
import Card from "../card";
import Footer from "../Footer"
import ailments from "./ailments.json"

class Landing extends Component {

  state =  {
    ailments
  };

  render() {
    return (
      <div>
        <Hero />
        <div className = "row justify-content-center">
        {this.state.ailments.map(ailments => (
          <Card
          key = {ailments.id}
          heading = {ailments.heading}
          />
        ))}
        </div>

        <Footer />

      </div>
    );
  }
}

export default Landing;
