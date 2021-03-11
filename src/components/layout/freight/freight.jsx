import React, {Component} from "react"
import eximPic from "../../../assets/images/eximPic.png"
import freight from "../../../assets/images/freight.svg"
import plane from "../../../assets/images/plane.svg"
import mob1 from "../../../assets/images/mob1.svg"

import Aos from "aos"
import "aos/dist/aos.css"

class Freight extends Component{

    componentDidMount=()=>{
      Aos.init({
        duration: 2000,
        delay: 100
      });
    }

    render(){

      return (
           <div className="freight">
                <div className="freight__blue">digital</div>
                <div className="freight__head">Freight forwarding</div>
                <div className="freight__black">Get Job Done</div>

                <div className="freight__flex">
                    <img src={freight} alt=""/>
                    <img data-aos="fade-right" id="freight__flex_plane" src={plane} alt=""/>
                    <div className="freight__flex_text">
                        <div className="freight__flex_text-l">
                          Digital Freight<br/>Forwarding
                        </div>
                        <div className="freight__flex_text-s">
                           Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                        </div>
                    </div>
                </div>

                <div className="freight__flex freight__flex--rev">
                    <div className="freight__flex_text freight__flex_text--left">
                        <div className="freight__flex_text-l">
                        Compare &<br/>Book
                        </div>
                        <div className="freight__flex_text-s">
                           Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                        </div>
                    </div>
                    <img data-aos="fade-left" src={mob1} alt=""/>
                </div>

                <div className="freight__flex freight__flex--mod2">
                    <div className="freight__exim_text">
                       <strong>Exim</strong><span>Education</span>
                    </div>
                    <img className="freight__exim_img" src={eximPic} alt=""/>
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

export default Freight;
