import React, { useState } from "react";
import Hero from "../Hero"
import Card from "../card";
import Footer from "../Footer"

import { Alert } from 'reactstrap'
import { Collapse, Button } from 'reactstrap';

function Landing(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
    return (
      <div>
        <Hero />
        <div className = "row justify-content-center">
        <div>
          <div>
          <Alert className = "justify-content-center" color="info">
        
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Head Ache</Button>
        <Collapse isOpen={isOpen}>
            <Card>
             Hello</Card></Collapse>
      </Alert>
          </div>

      <Alert color="info">
       Anxiety
      </Alert>
      <Alert color="info">
        Back Problems
      </Alert>
      <Alert color="info">
        Breathing Difficulties
      </Alert>
      <Alert color="info">
        Diabetes
      </Alert>
      <Alert color="info">
        Headache
      </Alert>
      <Alert color="info">
      Heart Disease
      </Alert>
      <Alert color="info">
        High Cholesterol
      </Alert>
      <Alert color="info">
        Joint Pain
      </Alert>
      <Alert color="info">
        Skin Disorders
      </Alert>
    </div>
        
        
        {/* {this.state.ailments.map(ailments => (
          <Card
          key = {ailments.id}
          heading = {ailments.heading}
          />
        ))} */}
        </div>

        <Footer />

      </div>
    );
  }


export default Landing;
