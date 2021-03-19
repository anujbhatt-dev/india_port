import React, { Component } from 'react'
import gsap from "gsap"
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/gsap-core"
import {Power3} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import globe from "../../../../assets/images/globe.svg"

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default class Landing3_2 extends Component {

    componentDidMount=()=>{


    //     let controller = new ScrollMagic.Controller();

    //     let scene2 = new ScrollMagic.Scene({
    //     triggerElement: '#landing3-1',
    //     duration: '100%',
    //     triggerHook: 0,
    //     offset: '0'
    // })
    // .setTween(TweenMax.
    //  to('.landing3__link_globe', .2, {css:{scaleX:100, scaleY:100, opacity:1, zIndex:100}}))
    // .setPin('#landing3-1')
    // .addTo(controller);
  
     
}

    render() {
        return (
            <div className="landing3-1 landing3">
                 {/* <img className="landing3__link_globe" style={{opacity:0}} src={globe} alt=""/> */}

            </div>
        )
    }
}
