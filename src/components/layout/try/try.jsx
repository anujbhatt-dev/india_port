import React, {Component} from "react"
import mob1 from "../../../assets/images/mob1.svg"
import mob2 from "../../../assets/images/mob2.svg"
import smallTruck from "../../../assets/images/smallTruck.svg"
import "./try.scss"

import ScrollMagic from 'scrollmagic';
// import {TimelineMax, Power3 , TweenMax} from "gsap";
// import {TimelineMax} from "gsap/gsap-core"
import {TimelineMax} from "gsap/gsap-core"
import {Power3} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


class Try extends Component{

    componentDidMount=()=>{
      let controller = new ScrollMagic.Controller();

       let timeline = new TimelineMax();
      timeline
      .from('.landing2__firstWrapper_first', 4, {
        y: -650,
        x: 0,
        ease: Power3.easeInOut
       })
       .from('.landing2__secondWrapper_second', 4, {
         y: 650,
         x:0,
         ease: Power3.easeInOut
        })

       let scene = new ScrollMagic.Scene({
         triggerElement: '#landing2',
         duration: '100%',
         triggerHook: 0,
         offset: '300'
     })
     .setTween(timeline)
     .setPin('#landing2')
     .addTo(controller);
    }

    render(){

      return (
          <div className="try">
                <h1>this Route is for trying!</h1>
                <div id="landing2" className="landing2">
                    <div className="landing2__firstWrapper">
                        <div className="landing2__firstWrapper_first">
                             <div className="landing2__firstWrapper_first-text">
                                 <div className="landing2__firstWrapper_first-text-head">Duty Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                             <div className="landing2__firstWrapper_first-text">
                                 <div className="landing2__firstWrapper_first-text-head">Invoice Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                             <div className="landing2__firstWrapper_first-text">
                                 <div className="landing2__firstWrapper_first-text-head">BGM Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                        </div>
                    </div>
                    <div className="landing2__secondWrapper">
                        <div className="landing2__secondWrapper_second">
                          <img src={mob1} alt=""/>
                          <img src={mob2} alt=""/>
                          <img src={mob1} alt=""/>
                        </div>
                    </div>
                </div>
          </div>
      )
    }
}

// <img className="landing2__truck" src={smallTruck} alt=""/>
export default Try;
