import React, {Component} from "react"
import cc from "../../../assets/images/cc.svg"
import mob1 from "../../../assets/images/mob1.svg"
import board from "../../../assets/images/board.svg"


class CustomClearance extends Component{

    componentDidMount=()=>{
      window.scrollTo({
          top:0,
          behavior:"auto"
        })
    }

    render(){

      return (
        <div className="freight">
             <div className="freight__head freight__head--ins">CUSTOM CLearance</div>
             <div className="freight__black">Get Job Done</div>

             <div className="freight__flex">
                 <img src={cc} alt=""/>
                 <div className="freight__flex_text">
                     <div className="freight__flex_text-l">
                       MANAGING<br/>Documents
                     </div>
                     <div className="freight__flex_text-s">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                     </div>
                 </div>
             </div>

             <div className="freight__flex freight__flex--rev">
                 <div className="freight__flex_text freight__flex_text--left">
                     <div className="freight__flex_text-l">
                     Handling<br/>Documents
                     </div>
                     <div className="freight__flex_text-s">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                     </div>
                 </div>
                 <img src={mob1} alt=""/>
             </div>

             <div className="freight__flex freight__flex--rev">
                 <div className="freight__flex_text freight__flex_text--left">
                     <div className="freight__flex_text-l">
                     Transparency<br/>Only <strong>CHA</strong>
                     </div>
                     <div className="freight__flex_text-s">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                     </div>
                 </div>
                 <img src={board} alt=""/>
             </div>

             <div className="freight__quote">
                 CUSTOM CLearance is never easy, consetetur sadipscing
                 <br/>diam nonumy eirmod tempor invidunt ut labore et dolore
                 <br/>uyam erat, sed diam volu.
             </div>
             <div className="freight__flex freight__flex--mod">
                   <button className="freight__flex_btn">Get Quote</button>
                   <button className="freight__flex_btn">Get Quote</button>
                   <button className="freight__flex_btn">Contact Us</button>
             </div>
        </div>
      )
    }
}

export default CustomClearance;
