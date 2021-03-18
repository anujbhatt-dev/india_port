import React, {Component} from "react"
import $ from 'jquery'
import mob1 from "../../../../assets/images/mob1.svg"
import mob2 from "../../../../assets/images/mob2.svg"
import boat1 from "../../../../assets/images/boat1.svg"
import boat2 from "../../../../assets/images/boat2.svg"
import boat3 from "../../../../assets/images/boat3.svg"
import ScrollMagic from 'scrollmagic';
import {TimelineMax, Power3 , TweenMax} from "gsap/gsap-core"
// import Timeline from 'timeline';

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Landing2 extends Component{

    state={
      number:0,
      mobileNumber:0,
      flag:0
    }

    componentDidMount=()=>{
        // window.addEventListener("scroll",(e)=>{
        //    console.log(window.pageYOffset);
        //    if((window.pageYOffset>=(this.props.landing2-100)) && (window.pageYOffset<=this.props.landing2 &&(this.state.flag===0)) && !this.props.mobile){
        //      $(".landing2").css("position","fixed")
        //      $("body").css("overflow-y","hidden")
        //      setTimeout(()=>{
        //         this.setState({
        //           number:1
        //         })
        //         setTimeout(()=>{
        //            this.setState({
        //              number:2
        //            })
        //            setTimeout(()=>{
        //               this.setState({
        //                 number:0,flag:1
        //               })
        //               $(".landing2").css("position","relative")
        //               $("body").css("overflow-y","scroll")
        //            },2000)
        //         },2000)
        //      },2000)
        //    }
        // })

        let controller = new ScrollMagic.Controller();

        let timeline = new TimelineMax();
        timeline
        .from(
          ".landing2__flex_text",
          3,
          {
            y:-100,
            ease:Power3.easeInOut
          }
        )

        let scene = new ScrollMagic.Scene({
          triggerElement:".landing2",
          duration:"100%",
          triggerHook:0,
          offset:"300"
        })
        .setTween(timeline)
        .setPin(".landing2")
        .addTo(controller)





        this.numberInterval();



    }


    mobileNumberIntervalFunc=null;

    numberInterval=()=>{
     this.numberIntervalFunc= setInterval(()=>{
          this.setState(s=>{return {mobileNumber:s.mobileNumber===2?0:s.mobileNumber+1}})
      }, 1000)
    }

    mobileNumberHandler=(mobileNumber)=>{
      this.setState({
        mobileNumber:mobileNumber
      })
      clearInterval(this.mobileNumberIntervalFunc);
    }

    numberHandler=(number)=>{
      this.setState({
        number:number
      })
    }

    render(){

      return (
         !this.props.mobile?<div className="landing2">
         <div className="landing2__dots">


             <div onClick={()=>this.numberHandler(0)} className={this.state.number===0?"landing2__dots_div landing2__dots_div--mod":"landing2__dots_div"}>
                  .
             </div>

             <div onClick={()=>this.numberHandler(1)} className={this.state.number===1?"landing2__dots_div landing2__dots_div--mod":"landing2__dots_div"}>
                  .
             </div>

             <div onClick={()=>this.numberHandler(2)} className={this.state.number===2?"landing2__dots_div landing2__dots_div--mod":"landing2__dots_div"}>
                  .
             </div>

         </div>
            <div  id="landing2" className="landing2__flexWrapper">

               <div className="landing2__flex">
                   <div className="landing2__flex_text">
                       <div className="landing2__flex_text-l">{this.state.number===0?"Duty":this.state.number===1?"Invoice":"BGM"}<br/>Calculator</div>
                       <div className="landing2__flex_text-s">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                   </div>
                   <img src={mob1} alt=""/>
               </div>
               <img src={this.state.number===0?boat1:this.state.number===1?boat2:boat3} alt=""/>
             </div>

         </div>
         :
         <div className="landing2__mob">
               <div className="landing2__mob_head">Tools</div>
              <div className="landing2__mob_dots">

                  <svg onClick={()=>this.mobileNumberHandler(0)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="7.5" cy="7.5" r="7.5" stroke="#0239ff" fill={this.state.mobileNumber===0?"#0239ff":"white"}/>
                  </svg>

                  <svg onClick={()=>this.mobileNumberHandler(1)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="7.5" cy="7.5" r="7.5" stroke="#0239ff" fill={this.state.mobileNumber===1?"#0239ff":"white"}/>
                  </svg>

                  <svg onClick={()=>this.mobileNumberHandler(2)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="7.5" cy="7.5" r="7.5" stroke="#0239ff" fill={this.state.mobileNumber===2?"#0239ff":"white"}/>
                  </svg>

              </div>
              <div className="landing2__mob_main">
                   <img  src={this.state.mobileNumber===0?mob1:this.state.mobileNumber===1?mob2:mob1} alt=""/>
                   <div className="landing2__mob_main-name">
                       {this.state.mobileNumber===0?"mob1":this.state.mobileNumber===1?"mob2":"mob1"} Calculator
                   </div>
              </div>
         </div>

      )
    }
}

export default Landing2;
