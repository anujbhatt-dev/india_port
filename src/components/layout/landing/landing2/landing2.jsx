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
import {Power3, Power0} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


class Landing2 extends Component{

    state={
      number:0,
      show:false,
      flag:0,
      done:false,
    }

    numberIntervalFunc=null;

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



    getScrollDirection=()=>{
      let scrollPos = 0;
      // window.addEventListener('wheel', function(){
        // alert("under")

      
     if(document.getElementById('s2')===null)
        return;

        if ((document.getElementById('s2').getBoundingClientRect()).left < scrollPos)
         {
          scrollPos = (document.getElementById('s2').getBoundingClientRect()).left;

            return -1;
          }
        else{
          scrollPos = (document.getElementById('s2').getBoundingClientRect()).left;

          return 1;
        }
      
     
    }


    animationFunc=()=>{
 
           
      let stopScroll=(e)=> {
        
        e.preventDefault();
      }

      window.addEventListener("wheel",stopScroll , {passive: false });
     //  this.level=2;

       let onscrollFunc=()=>{
        
        // alert(this.level +" "+this.getScrollDirection());
        if(this.level===1){
            this.level=-1;
            if(this.getScrollDirection()===1){
              
              let timeline1 = gsap.timeline()
      timeline1
      .fromTo('.text-2', 1.5,
      {
         y:"-100%"
      },
      {
        y: "0%",
        x: 0,
        ease: Power3.linear
       })
       .to('.text-1', 1.5,
       
       {
        y: "100%",
        x: 0,
        ease: Power3.linear
       }, "=-1.5")
       .to('.landing2__secondWrapper_second--1', 1.5, {
         y: "-200%",
         x:0,
         ease: Power3.linear
       },"-=1.5")
       .fromTo('.landing2__secondWrapper_second--2', 1.5, {
        y: "100%",
        ease: Power3.linear
      },
      {
        y:"0%"
      }
      ,"-=1.5")
      .eventCallback("onComplete", ()=>{
        this.level=2;
        // alert("done")
      })
                 
            }else{
              this.level=0;
              window.removeEventListener("wheel", onscrollFunc);
               window.removeEventListener("wheel", stopScroll);
               window.addEventListener("wheel",(e)=>{
                  e.preventDefault();
               }, true);
            }


        }else if(this.level===2){

           if(this.getScrollDirection()===1){
                 
                 let timeline1 = gsap.timeline();
                 this.level=-1;
                 timeline1
                 .to('.landing2__secondWrapper_second--2', 1.5, {
                   y: "-100%",
                   x:0,
                   ease: Power3.linear
                 })
                 .fromTo('.landing2__secondWrapper_second--3', 1.5, {
                   y: "200%",
                   opacity:1,
                   // x:0,
                   // css:{opacity:1},
                   ease: Power3.linear
                 },{
                   y:"0%",
                   opacity:1,
                   ease: Power3.linear
                 }
                 ,"-=1.5")
                  .fromTo('.text-3', 1.5,
                  {
                    y:"-100%"
                  },
                   {
                  y: "0%",
                  x:0,
                  ease: Power3.easeInOut
                 }, "-=1.5")
                 .to('.text-2', 1.5, {
                 y: "100%",
                 x:0,
                 ease: Power3.easeInOut
                }, "-=1.5")
                 .eventCallback("onComplete", ()=>{
                  this.level=3;
                 })
            }else{
              
            }
              
            
        }else if(this.level===3){
           if(this.getScrollDirection()===1){
               window.removeEventListener("wheel", onscrollFunc);
               window.removeEventListener("wheel", stopScroll);
               window.addEventListener("wheel",(e)=>{
                  e.preventDefault();
               }, true);
            }else{
                          // alert("3 up")

            }

         }


        // window.removeEventListener("wheel", onscrollFunc);
      
        // alert("scroll")
    
   }

      window.addEventListener("wheel",onscrollFunc)
 
    }
    level=1;

    componentDidMount=()=>{

  
        this.numberInterval();

      if(!this.props.isMobile()){
        let controller = new ScrollMagic.Controller();
        let timeline = gsap.timeline(); 
 
       timeline
       .to('.s2', 1, {
           x: "0.1%",
           ease: Power0.linear
         })
         .eventCallback("onStart",()=>this.animationFunc())
         .eventCallback("onReverseComplete", ()=>{
          // let stopScroll=(e)=> {
        
          //   e.preventDefault();
          // }
    
          // window.addEventListener("wheel",stopScroll , {passive: false });
          let timeline1 = gsap.timeline();
          // this.level=-1;
          timeline1
          .to('.landing2__secondWrapper_second--3', 1.5, {
            y: "-100%",
            x:0,
            ease: Power3.linear
          })
          .fromTo('.landing2__secondWrapper_second--1', 1.5, {
            y: "200%",
            opacity:1,
            // x:0,
            // css:{opacity:1},
            ease: Power3.linear
          },{
            y:"0%",
            opacity:1,
            ease: Power3.linear
          }
          ,"-=1.5")
           .fromTo('.text-1', 1.5,
           
           {
             y:"-100%"
             },

           {
           y: "0%",
           x:0,
           ease: Power3.easeInOut
          }, "-=1.5")
          .to('.text-3', 1.5, {
            y: "100%",
            x:0,
            ease: Power3.easeInOut
           }, "-=1.5")
          .eventCallback("onComplete", ()=>{
           this.level=1;
          //  window.removeEventListener("wheel", stopScroll);
          //  window.addEventListener("wheel",(e)=>{
          //     e.preventDefault();
          //  }, true);
          })


         })
        //  .eventCallback("onUpdate", ()=>{alert("update")})
 
 
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

//     componentWillUnmount=()=>{
//       let el = document.body,
//     elClone = el.cloneNode(true);

// el.parentNode.replaceChild(elClone, el);
// }

    render(){

      return (
   this.props.isMobile()
   ?                <div className="landing2__mob">
                        <h1 className="head">
                            TOOLS
                        </h1>
                        <div className="landing2__mob_flex">
                             <img className={this.state.number===0?"slide_down":this.state.number===1?"slide_down1":"slide_down2"} src={this.state.number===0?mob1:this.state.number===1?mob2:mob1} alt=""/>
                             <h2 className={this.state.number===0?"dissolve":this.state.number===1?"dissolve1":"dissolve2"}>{this.state.number===0?"Duty":this.state.number===1?"Invoice":"BGM"} Calculator</h2>
                        </div>
                        <div className="landing2__mob_toggler">
                             <div onClick={()=>this.numberHandler(0)} className={this.state.number===0?"landing2__mob_toggler-dot landing2__mob_toggler-dot--selected":"landing2__mob_toggler-dot"}>.</div>
                             <div onClick={()=>this.numberHandler(1)} className={this.state.number===1?"landing2__mob_toggler-dot landing2__mob_toggler-dot--selected":"landing2__mob_toggler-dot"}>.</div>
                             <div onClick={()=>this.numberHandler(2)} className={this.state.number===2?"landing2__mob_toggler-dot landing2__mob_toggler-dot--selected":"landing2__mob_toggler-dot"}>.</div>
                        </div>
                   </div>
  :                <div id="landing2" className="landing2">
                    <div className="landing2__firstWrapper">
                        <div className="landing2__firstWrapper_first">
                        <div className="landing2__firstWrapper_first-text  text-3  ">
                                 <div className="landing2__firstWrapper_first-text-head">BGM Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                           
                             <div className="landing2__firstWrapper_first-text  text-2 ">
                                 <div className="landing2__firstWrapper_first-text-head">Invoice Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                             
                             <div className="landing2__firstWrapper_first-text text-1">
                                 <div className="landing2__firstWrapper_first-text-head">Duty Calculator</div>
                                 <div className="landing2__firstWrapper_first-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam.</div>
                             </div>
                        </div>
                    </div>
                    <div className="landing2__secondWrapper">
                        <div className="landing2__secondWrapper_second">
                          <img className="landing2__secondWrapper_second--2" src={mob2} alt=""/>
                          <img className="landing2__secondWrapper_second--3" style={{opacity:0}} src={mob1} alt=""/>
                          <img className="landing2__secondWrapper_second--1" src={mob1} alt=""/>

                        </div>
                    </div>
                    <div className="landing2__motion">
                        <img  className="landing2__motion_mode s1" src={smallShip} alt=""/>
                        <img id="s2" className="landing2__motion_mode s2" style={{opacity:0}}  src={smallShip} alt=""/>
                        <img  className="landing2__motion_bar" src={bar} alt=""/>
                        <img  className="landing2__motion_line" src={line} alt=""/>
                    </div>
                </div>
      )
    }
}

// <img className="landing2__truck" src={smallTruck} alt=""/>
export default Landing2;
