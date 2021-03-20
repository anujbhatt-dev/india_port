import React, {Component} from "react"
import mob1 from "../../../../assets/images/mob1.svg"
import mob2 from "../../../../assets/images/mob2.svg"
import smallTruck from "../../../../assets/images/smallTruck.svg"
import line from "../../../../assets/images/line.svg"
import bar from "../../../../assets/images/bar.svg"
import smallShip from "../../../../assets/images/smallShip.svg"
import gsap from "gsap"
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/gsap-core"
import {Power3} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


class Landing2 extends Component{

    state={
      number:0,
      show:false,
      flag:0,
      updated:false,
    }

    numberIntervalFunc=null;

    componentDidMount=()=>{
      this.numberInterval();

    }

    numberInterval=()=>{
     this.numberIntervalFunc= setInterval(()=>{
          this.setState(s=>{return {number:s.number===2?0:s.number+1}})
      }, 2000)
    }

    numberHandler=(num)=>{
      this.setState({
        number:num
      })
      clearInterval(this.numberIntervalFunc);
    }
  
      componentDidUpdate=()=>{
  
        if(this.state.updated)
          return;
        
          this.setState({updated:true});

      if(!this.props.mobile){
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
       .from('.landing2__secondWrapper_second--2', 20, {
        y: "200%",
        x:0,
        ease: Power3.linear
      },"-=20")
        .to('.landing2__secondWrapper_second--2', 20, {
          y: "-100%",
          x:0,
          ease: Power3.linear
        })
        .from('.landing2__secondWrapper_second--3', 20, {
          y: "200%",
          x:0,
          ease: Power3.linear
        },"-=20")
         .to('.landing2__firstWrapper_first-text--2', 20, {
         y: "100%",
         x:0,
         ease: Power3.easeInOut
        }, "-=20")
        .to('.landing2__motion_bar', 50, {
          x: 900,
          ease: Power3.linear
        },"-=40")
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





    }

    render(){

      return (
this.props.mobile
  ?                <div className="landing2__mob">
                        <h1 className="head">
                            TOOLS
                        </h1>
                        <div className="landing2__mob_flex">
                             <img className={this.state.number===0?"slide_down":this.state.number===1?"slide_down1":"slide_down2"} src={this.state.number===0?mob1:this.state.number===1?mob2:mob1} alt=""/>
                             <h2 className={this.state.number===0?"dissolve":this.state.number===1?"dissolve1":"dissolve2"}>{this.state.number===0?"Duty":this.state.number===1?"Invoice":"BGM"} Calculator</h2>
                        </div>
                        <div className="landing2__mob_toggler">
                             <div onClick={()=>this.setState({number:0})} className={this.state.number===0?"landing2__mob_toggler-dot landing2__mob_toggler-dot--selected":"landing2__mob_toggler-dot"}>.</div>
                             <div onClick={()=>this.setState({number:1})} className={this.state.number===1?"landing2__mob_toggler-dot landing2__mob_toggler-dot--selected":"landing2__mob_toggler-dot"}>.</div>
                             <div onClick={()=>this.setState({number:2})} className={this.state.number===2?"landing2__mob_toggler-dot landing2__mob_toggler-dot--selected":"landing2__mob_toggler-dot"}>.</div>
                        </div>
                   </div>
  :                <div id="landing2" className="landing2">
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
      )
    }
}

// <img className="landing2__truck" src={smallTruck} alt=""/>
export default Landing2;
