import React, {Component} from "react"
import mob1 from "../../../assets/images/mob1.svg"
import mob2 from "../../../assets/images/mob2.svg"
import globe from "../../../assets/images/globe.svg"
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


       let scene = new ScrollMagic.Scene({
         triggerElement: '#landing2',
         duration: '100%',
         triggerHook: 0,
         offset: '0'
     })
     .setTween(TweenMax.
      to('.landing2__motion_mode', .2, {css:{scaleX:30, scaleY:30, opacity:0.7}}))
     .setPin('#landing2')
     .addTo(controller);





    }

    render(){

      return (
          <div className="try">
                <h1>this Route is for trying!</h1>
                <div id="landing2" className="landing2">
                    <div className="landing2__firstWrapper">
                    <div className="landing2__motion">
                        <img  className="landing2__motion_mode" src={globe} alt=""/>
                      
                    </div>
                </div>
          </div>
          </div>
      )
    }
}

// <img className="landing2__truck" src={smallTruck} alt=""/>
export default Try;
