import React, {Component} from "react"
import eximPic from "../../../assets/images/eximPic.png"
import freight from "../../../assets/images/freight.svg"
import mob1 from "../../../assets/images/mob1.svg"

class Freight extends Component{

    render(){

      return (
           <div className="freight">
                <div className="freight__blue">digital</div>
                <div className="freight__head">Freight forwarding</div>
                <div className="freight__black">Get Job Done</div>

                <div className="freight__flex">
                    <img src={freight} alt=""/>
                    <div className="freight__flex_text">
                        <div className="freight__flex_text-l">
                          Digital Freight<br/>Forwarding
                        </div>
                        <div className="freight__flex_text-s">
                           Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                        </div>
                    </div>
                </div>

                <div className="freight__flex">
                    <div className="freight__flex_text freight__flex_text--left">
                        <div className="freight__flex_text-l">
                        Compare &<br/>Book
                        </div>
                        <div className="freight__flex_text-s">
                           Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                        </div>
                    </div>
                    <img src={mob1} alt=""/>
                </div>

                <div className="freight__exim">
                    <img className="freight__exim_img" src={eximPic} alt=""/>
                    <div className="freight__exim_text">
                       exim <strong>education</strong>
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

export default Freight;
