import React, { Component } from 'react'
import gsap from "gsap"
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/gsap-core"
import {Power3} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import globe from "../../../../assets/images/globe.svg"

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default class Landing3_1 extends Component {

    componentDidMount=()=>{


        let controller = new ScrollMagic.Controller();
        // let timeline = new TimelineMax();

        // timeline
        // .from('.landing3__link_globe', 2, {
        //   left: "-200%",
        //   ease: Power3.linear
        //  })

        let scene = new ScrollMagic.Scene({
          triggerElement: '#landing3__link_globe',
          duration: '100%',
          triggerHook: 0,
          offset: '0'
      })
      .setTween(TweenMax.
       to('.landing3__link_globe', .2, {css:{scaleX:1, scaleY:1, opacity:1, zIndex:10000}}))
    //    .setTwSeen(timeline)
      .setPin('#landing3__link_globe')
      .addTo(controller);
 
  
     
}

    render() {
        return (
            <div className="landing3-1 " style={{width:"100%"}}>
                 <img className="landing3__link_globe" style={{opacity:1}} src={globe} alt=""/>

            </div>
        )
    }
}
