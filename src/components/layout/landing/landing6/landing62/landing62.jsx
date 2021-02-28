import React, {Component} from "react"
import eximBack from "../../../../../assets/images/eximBack.svg"
import eximLap from "../../../../../assets/images/eximLap.svg"

class Landing62 extends Component{

    render(){

      return (
         <div className="landing6__2">
            <img className="landing6__2_img1" src={eximBack} alt=""/>
            <img className="landing6__2_img2" src={eximLap} alt=""/>
            <div className="landing6__2_text">
                <div className="landing6__2_text-large">EXIM</div>
                <div className="landing6__2_text-medium">EDUCATION</div>
                <div className="landing6__2_text-small">Lorem ipsum dolor sit amet.</div>
            </div>
         </div>
      )
    }
}

export default Landing62;
