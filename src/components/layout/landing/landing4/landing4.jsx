import React, {Component} from "react"
import triangle from "../../../../assets/images/triangle.svg"
import smallTruck from "../../../../assets/images/smallTruck.svg"
import smallShip from "../../../../assets/images/smallShip.svg"
import yellowPlane from "../../../../assets/images/yellowPlane.svg"

class Landing4 extends Component{

    render(){

      // <img className="landing4__smallShip" src={smallShip} alt=""/>
      // <img className="landing4__smallTruck" src={smallTruck} alt=""/>
      // <img className="landing4__yellowPlane" src={yellowPlane} alt=""/>
      return (
         <div  id="landing4" className="landing4">
             <div className="landing4__text">
                <div className="landing4__text_primary">indiaport is a goal is to improve</div>
                <div className="landing4__text_secondary">transparency</div>
             </div>
             <img className="landing4__circle" src={triangle} alt=""/>
         </div>
      )
    }
}

export default Landing4;
