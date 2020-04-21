import React, { Component } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import GraphToggle from "./graphToggle"

class Graph extends Component{
    state = {
        currentGraph: "PieChart"
    }

    handleGraphChange = graph => {
        this.setState({
            currentGraph: graph
        })
    }

    renderGraph =() => {
        if(this.state.currentGraph === "PieChart"){
            return<PieChart />
        }else{
            return<BarChart />
        }
    }
    render(){
        return(
            <div>
                <GraphToggle
                    currentGraph ={this.state.currentgraph}
                    handleGraphChange ={this.handleGraphChange}
                />
                   <div>
                   {this.renderGraph()}
            </div>
            </div>
         
        )
    }
}

export default Graph