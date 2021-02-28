import React, {Component} from "react"
import insure from "../../../assets/images/insure.svg"
import mob1 from "../../../assets/images/mob1.svg"
import man from "../../../assets/images/man.png"


class Insurance extends Component{

    render(){

      return (
        <div className="freight">
             <div className="freight__head freight__head--ins">Insurance</div>
             <div className="freight__black">Safety First</div>

             <div className="freight__flex">
                 <img src={insure} alt=""/>
                 <div className="freight__flex_text ">
                     <div className="freight__flex_text-l">
                       Shipment<br/>Insurance
                     </div>
                     <div className="freight__flex_text-s">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                     </div>
                 </div>
             </div>

             <div className="freight__flex">
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

             <div className="freight__exim">
                 <img className="freight__exim_img--ins" src={man} alt=""/>
                 <div className="freight__exim_text freight__exim_text--ins">
                     <div className="freight__exim_text-l">
                         Professional
                         <br/>Insurannce
                     </div>
                     <div className="freight__exim_text-s">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                     </div>
                 </div>
             </div>

             <div className="freight__quote">
                 CUSTOM CLearance is never easy, consetetur sadipscing
                 <br/>diam nonumy eirmod tempor invidunt ut labore et dolore
                 <br/>uyam erat, sed diam volu.
             </div>
             <div className="freight__flex">
                   <button className="freight__flex_btn">Get Quote</button>
                   <button className="freight__flex_btn">Get Quote</button>
                   <button className="freight__flex_btn">Contact Us</button>
             </div>
        </div>
      )
    }
}

export default Insurance;
