import React, {Component} from "react"
import triangle from "../../../../assets/images/triangle.svg"
import circle from "../../../../assets/images/bigCircle.svg"
import smallTruck from "../../../../assets/images/smallTruck.svg"
import smallShip from "../../../../assets/images/smallShip.svg"
import yellowPlane from "../../../../assets/images/yellowPlane.svg"

  import gsap from "gsap"
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/gsap-core"
import {Power3} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Landing4 extends Component{

    componentDidMount=()=>{


      let controller = new ScrollMagic.Controller();
       let timeline = new TimelineMax();

      timeline
      //scroll 1
      .to('.landing4__smallShip', 20, {
        y: "300%",
        x: "-50%",
        ease: Power3.linear
       })
       .to('.landing4__yellowPlane', 20, {
        y: "-100%",
        x: "-100%",
        ease: Power3.linear
       }, "=-20")
       .to('.landing4__smallTruck', 20, {
        
        x: "100%",
        ease: Power3.linear
       }, "=-20")
       .to('.c1', 20, {
        
        y: "-1000%",
        ease: Power3.linear
       }, "=-20")
       .from('.c2', 20, {
        
        y: "1000%",
        ease: Power3.linear
       }, "=-10")


       //scroll 2
       .to('.landing4__smallShip', 20, {
        y: "700%",
        ease: Power3.linear
       })
       .to('.landing4__yellowPlane', 20, {
        y:"-70",
        x: "-300%",
        ease: Power3.linear
       }, "=-20")
       .to('.landing4__smallTruck', 20, {
        y: "-100%",
        x: "200%",
        ease: Power3.linear
       }, "=-20")
       .to('.c2', 20, {
        
        y: "-1000%",
        ease: Power3.linear
       }, "=-20")
       .from('.c3', 20, {
        
        y: "1000%",
        ease: Power3.linear
       }, "=-10")


       //scroll 3
       .to('.landing4__smallShip', 20, {
        y: "400%",
        x: "100%",
        ease: Power3.linear
       })
       .to('.landing4__yellowPlane', 20, {
        y:"120",
        x: "-400%",
        ease: Power3.linear
       }, "=-20")
       .to('.landing4__smallTruck', 20, {
        y: "-330%",
        x: "200%",
        ease: Power3.linear
       }, "=-20")
       .to('.c3', 20, {
        
        y: "-1000%",
        ease: Power3.linear
       }, "=-20")
       
      


       let scene = new ScrollMagic.Scene({
         triggerElement: '#landing4',
         duration: '100%',
         triggerHook: 0,
         offset: '0'
     })
     .setTween(timeline)
     .setPin('#landing4')
     .addTo(controller);





    }
    render(){

      return (
         <div  id="landing4" className="landing4">
             <div className="landing4__text">
               <div className="landing4__text_primary">indiaport is a goal is to improve</div>
               <div className="landing4__text_secondary c1">transparency1</div>
               <div className="landing4__text_secondary c2">transparency2</div>
               <div className="landing4__text_secondary c3">transparency3</div>
             </div>
                <img className="landing4__circle" src={circle} alt=""/>
                <img className="landing4__smallShip" src={smallShip} alt=""/>
                <img className="landing4__smallTruck" src={smallTruck} alt=""/>
                <img className="landing4__yellowPlane" src={yellowPlane} alt=""/>
         </div>
      )
    }
}

export default Landing4;
