import React from 'react';
import "./style.css";



function Card(props) {

    return (
        
  
                    <div className="card bg-secondary">
                        
                    <h1 classNme = "card-title">{props.heading}</h1>
                    <div className ="card-body">Some text</div>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>

         
            )
    }

    export default Card