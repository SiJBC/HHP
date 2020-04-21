import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Card>
            <h2>user story</h2>
            <CardBody/>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Read more</Button>
     
        </Card>

        <Collapse isOpen={isOpen}>
            <Card>
             Hello</Card></Collapse>
        

 
     
     
    </div>
  );
}

export default Example;