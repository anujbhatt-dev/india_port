import React, {Component} from "react"
import Landing61 from "./landing61/landing61"
import Landing62 from "./landing62/landing62"

class Landing6 extends Component{

    render(){

      return (
         <div className="landing6">
             <h1 className="landing6__heading">Our Colaboration</h1>
             <Landing61/>
             <Landing62/>
         </div>
      )
    }
}

export default Landing6;
