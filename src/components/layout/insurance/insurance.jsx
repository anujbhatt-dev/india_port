import React, {Component} from "react"
import insure from "../../../assets/images/insure.svg"
import yellowPlane from "../../../assets/images/yellowPlane.svg"
import mob1 from "../../../assets/images/mob1.svg"
import man from "../../../assets/images/man.png"
import umbrella from "../../../assets/images/umbrella.svg"

import Aos from "aos"
import "aos/dist/aos.css"

class Insurance extends Component{


  componentDidMount=()=>{
      window.scrollTo({
          top:0,
          behavior:"auto"
        })
  


    Aos.init({
      duration: 2000,
      delay: 100
    });
  }

    render(){

      return (
        <div className="freight">
             <div className="freight__head freight__head--ins">Insurance</div>
             <div className="freight__black">Safety First</div>

             <div className="freight__flex">
                 <img src={insure} alt=""/>
                 <img data-aos="fade-right" id="freight__flex_plane" src={yellowPlane} alt=""/>
                 <div className="freight__flex_text ">
                     <div className="freight__flex_text-l">
                       Shipment<br/>Insurance
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
                 <img data-aos="fade-left" src={mob1} alt=""/>
             </div>

             <div className="freight__flex freight__flex--rev">
                 <div className="freight__flex_text freight__flex_text--left">
                     <div className="freight__flex_text-l">
                     <strong>100% </strong> Trusted<br/>insurance
                     </div>
                     <div className="freight__flex_text-s">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                     </div>
                 </div>
                 <img data-aos="fade-left" src={umbrella} alt=""/>
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

export default Insurance;
