import React, {Component} from "react"
import mob1 from "../../../assets/images/mob1.svg"
import mob2 from "../../../assets/images/mob2.svg"
import smallTruck from "../../../assets/images/smallTruck.svg"
import line from "../../../assets/images/line.svg"
import bar from "../../../assets/images/bar.svg"
import smallShip from "../../../assets/images/smallShip.svg"
import "./try.scss"
import gsap from "gsap"
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
      .to('.landing2__firstWrapper_first-text--3', 20, {
        y: "100%",
        x: 0,
        ease: Power3.linear
       })
       .to('.landing2__secondWrapper_second--1', 20, {
         y: "-100%",
         x:0,
         ease: Power3.linear
       },"-=20")
       .to('.landing2__firstWrapper_first-text--2', 20, {
         y: "100%",
         x:0,
         ease: Power3.easeInOut
        })
        .to('.landing2__secondWrapper_second--2', 20, {
          y: "-100%",
          x:0,
          ease: Power3.linear
        },"-=20")
        .to('.landing2__motion_bar', 50, {
          x: 900,
          ease: Power3.linear
        },"-=50")
        .to('.landing2__motion_mode', 50, {
          x: 900,
          ease: Power3.linear
        },"-=50")


       let scene = new ScrollMagic.Scene({
         triggerElement: '#landing2',
         duration: '100%',
         triggerHook: 0,
         offset: '0'
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
                             <div className="landing2__firstWrapper_first-text landing2__firstWrapper_first-text--1">
                                 <div className="landing2__firstWrapper_first-text-head">Duty Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                             <div className="landing2__firstWrapper_first-text  landing2__firstWrapper_first-text--2 ">
                                 <div className="landing2__firstWrapper_first-text-head">Invoice Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                             <div className="landing2__firstWrapper_first-text  landing2__firstWrapper_first-text--3  ">
                                 <div className="landing2__firstWrapper_first-text-head">BGM Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                        </div>
                    </div>
                    <div className="landing2__secondWrapper">
                        <div className="landing2__secondWrapper_second">
                          <img className="landing2__secondWrapper_second--1" src={mob1} alt=""/>
                          <img className="landing2__secondWrapper_second--2" src={mob2} alt=""/>
                          <img className="landing2__secondWrapper_second--3" src={mob1} alt=""/>
                        </div>
                    </div>
                    <div className="landing2__motion">
                        <img  className="landing2__motion_mode" src={smallShip} alt=""/>
                        <img  className="landing2__motion_bar" src={bar} alt=""/>
                        <img  className="landing2__motion_line" src={line} alt=""/>
                    </div>
                </div>
          </div>
      )
    }
}

// <img className="landing2__truck" src={smallTruck} alt=""/>
export default Try;
