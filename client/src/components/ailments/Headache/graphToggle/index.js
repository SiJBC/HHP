import React, {useEffect, useState} from 'react';
import API from "../../../../utils/API"

function graphToggle(props){

  
  const [methodLength, setMethodGraph ] = useState([])
  const [treatment, setTreatmentGraph] = useState([])
  const [pharm, setPharmGraph] = useState([])
  const [nopharm, setNoPharmGraph] = useState([])
  
  
      useEffect(() => {
          loadHeadache()
          loadHeadachePharm()
      }, [])
  
      function loadHeadache(){
          API.getHeadache()
          .then(res =>            
              console.log(res))
      }

      function loadHeadachePharm(){
        API.getHeadachePharm()
        .then(res => setMethodGraph(res))
      }



    return(
   <div>
      <a href="#PieChart"
          onClick={() => props.handleGraphChange("PieChart")}
          className={props.currentGraph === "PieChart" ? "nav-link active" : "nav-link"}
        >
          Pie Chart
        </a>
        <a
          href="#BarChart"
          onClick={() => props.handleGraphChange("BarChart")}
          className={props.currentGraph === "BarChart" ? "nav-link active" : "nav-link"}
        >
          Bar Chart
        </a>

   </div>
         
    )
}

export default graphToggle;