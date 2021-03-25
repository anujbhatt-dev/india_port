import React, {Component} from "react"
import triangle from "../../../../assets/images/triangle.svg"
import circle from "../../../../assets/images/bigCircle.svg"
import smallTruck from "../../../../assets/images/smallTruck.svg"
import smallShip from "../../../../assets/images/smallShip.svg"
import yellowPlane from "../../../../assets/images/yellowPlane.svg"
import hole from "../../../../assets/images/hole.svg"

  import gsap from "gsap"
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/gsap-core"
import {Power3} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Landing4 extends Component{



   level=1;


   getScrollDirection=()=>{
    // let scrollPos = 0;
    // window.addEventListener('wheel', function(){
      // alert("under")

    
    // document.getElementById('s2');
      // if ((document.getElementById('s2').getBoundingClientRect()).left < scrollPos)
      //  {
        // scrollPos = (document.getElementById('s2').getBoundingClientRect()).left;

          // return -1;
        // }
      // else{
        // scrollPos = (document.getElementById('s2').getBoundingClientRect()).left;

        return 1;
      }
    

      animationFunc=()=>{

          
        let stopScroll=(e)=> {
           
         e.preventDefault();
       }

       window.addEventListener("wheel",stopScroll , {passive: false });


       let onscrollFunc=()=>{

        if(this.level===1){
        
         if(this.getScrollDirection()===1){
              this.level=-1;
                
              let timeline1=gsap.timeline();
              timeline1
              .to(".landing4__hole", 0.7,
             {css:{scaleX:75, scaleY:75},
             ease: Power3.linear})
             .eventCallback("onComplete", ()=>{
               this.level=2;
             })

         }else{

         }
           
        }else if(this.level===2){
         if(this.getScrollDirection()===1){
           this.level=-1;
           let timeline1=gsap.timeline();
           timeline1
           //  scroll 1
     .to('.landing4__smallShip', 2, {
       y: "300%",
       x: "-50%",
       ease: Power3.linear
      })
      .to('.landing4__yellowPlane', 2, {
       y: "-100%",
       x: "-100%",
       ease: Power3.linear
     }, "=-2")
      .to('.landing4__smallTruck', 2, {

       x: "100%",
       ease: Power3.linear
     }, "=-2")
      .to('.c1', 2, {

       y: "-100%",
       // opacity:0,
       ease: Power3.linear
     }, "=-2")
      .fromTo('.c2', 2, 
      {
        y: "200%",
       
       ease: Power3.linear
      },
      {
        y:"-100%",
        opacity:1,
      }, "=-2")


      //scroll 2
      .to('.landing4__smallShip', 2, {
       y: "700%",
       ease: Power3.linear
      },)
      .to('.landing4__yellowPlane', 2, {
       y:"-70",
       x: "-300%",
       ease: Power3.linear
     }, "=-2")
      .to('.landing4__smallTruck', 2, {
       y: "-100%",
       x: "200%",
       ease: Power3.linear
     }, "=-2")
      .to('.c2', 2, {

       y: "-200%",
       ease: Power3.linear
     }, "=-2")
      .fromTo('.c3', 2, {
       
       y: "0",
       // opacity:1,
       ease: Power3.linear
      },{
        y:"-200%",
        opacity:1,
      }, "=-2")
     //

      //scroll 3
      .to('.landing4__smallShip', 2, {
       y: "450%",
       x: "100%",
       ease: Power3.linear
      })
      .to('.landing4__yellowPlane', 2, {
       y:"150%",
       x: "-400%",
       ease: Power3.linear
     }, "=-2")
      .to('.landing4__smallTruck', 2, {
       y: "-300%",
       x: "200%",
       ease: Power3.linear
     }, "=-2")
      .to('.c3', 2, {

       y: "-300%",
       ease: Power3.linear
     }, "=-2")
     .to('.landing4__text_primary', 2, {
      opacity: 0,
      ease: Power3.linear
    }, "=-2") 
    .eventCallback("onComplete", ()=>{
     this.level=3;
   })
         }else{
           
         }
          
       } else if(this.level===3){
         if(this.getScrollDirection()===1){


           this.level=-1;
           let timeline1=gsap.timeline();
           
           timeline1
           .to(".landing4__hole", 0.7,
       {css:{scaleX:6, scaleY:6},
       ease: Power3.linear},
        ).eventCallback("onComplete",()=>{
          this.level=4;
        })
      

         }else{
           
         }
          
       }else if(this.level===4){
         if(this.getScrollDirection()===1){
           window.removeEventListener("wheel", onscrollFunc);
           window.removeEventListener("wheel", stopScroll);
          window.addEventListener("wheel",(e)=>{
             e.preventDefault();
          }, true);
         }else{
           
         }
          
       }
       }
    window.addEventListener("wheel",onscrollFunc);

     }

    componentDidMount=()=>{

      if(!this.props.isMobile()){
        let controller = new ScrollMagic.Controller();
         let timeline = gsap.timeline()

        timeline
        .to(".ship", 2,
        {
          x:10,
        })
        .eventCallback("onStart",this.animationFunc)
        .eventCallback("onReverseComplete", ()=>{
           
          let timeline1=gsap.timeline();
          timeline1
          .to(".landing4__hole", 0.1,
          {css:{scaleX:1, scaleY:1},
          ease: Power3.linear},
           )
          .to('.landing4__smallShip', 0.1, {
            y:"0%",
            x:"0%",
          ease: Power3.linear
         }, )
         .to('.landing4__yellowPlane', 0.1, {
          y:"0%",
          x:"0%",
          ease: Power3.linear
        }, )
         .to('.landing4__smallTruck', 0.1, {
          y:"0%",
          x:"0%",
         ease: Power3.linear
        }, )
         .to('.c1', 0.1, {
          y:"0%",
          x:"0%",
         ease: Power3.linear
        }, )
         .to('.c2', 0.1, {
          y:"0%",
          x:"0%",
          opacity:0,
         ease: Power3.linear
         },)
         .to('.c3', 0.1, {
          y:"0%",
          x:"0%",
          opacity:0,
         ease: Power3.linear
         }, )
        
         .eventCallback("onComplete", ()=>{this.level=1; })



        })
        
        //scroll 1
      //   .to('.landing4__smallShip', 2, {
      //     y: "300%",
      //     x: "-50%",
      //     ease: Power3.linear
      //    }, "=-2")
      //    .to('.landing4__yellowPlane', 2, {
      //     y: "-100%",
      //     x: "-100%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .to('.landing4__smallTruck', 2, {

      //     x: "100%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .to('.c1', 2, {

      //     y: "-100%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .from('.c2', 2, {

      //     y: "200%",
      //     ease: Power3.linear
      //    }, "=-1000")


      //    //scroll 2
      //    .to('.landing4__smallShip', 2, {
      //     y: "700%",
      //     ease: Power3.linear
      //    })
      //    .to('.landing4__yellowPlane', 2, {
      //     y:"-70",
      //     x: "-300%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .to('.landing4__smallTruck', 2, {
      //     y: "-100%",
      //     x: "200%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .to('.c2', 2, {

      //     y: "-200%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .from('.c3', 2, {

      //     y: "100%",
      //     ease: Power3.linear
      //    }, "=-1000")
      //   //

      //    //scroll 3
      //    .to('.landing4__smallShip', 2, {
      //     y: "450%",
      //     x: "100%",
      //     ease: Power3.linear
      //    })
      //    .to('.landing4__yellowPlane', 2, {
      //     y:"150%",
      //     x: "-400%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .to('.landing4__smallTruck', 2, {
      //     y: "-300%",
      //     x: "200%",
      //     ease: Power3.linear
      //   }, "=-2")
      //    .to('.c3', 2, {

      //     y: "-300%",
      //     ease: Power3.linear
      //   }, "=-2")
      //   .to('.landing4__text_primary', 2, {
      //    opacity: 0,
      //    ease: Power3.linear
      //  }, "=-2")
      // //  .eventCallback("onComplete", ()=>{
      //   //   let timeline2 = new TimelineMax();

      //     // timeline2
      //     .to(".landing4__hole", 2,
      //     {css:{scaleX:6, scaleY:6},
      //     ease: Power3.linear},
      //      )


        //  })

      //  .to(".globe", .2, {css:{scaleX:2, scaleY:2, opacity:0.7},ease: Power3.linear})



         let scene = new ScrollMagic.Scene({
           triggerElement: '#landing4',
           duration: '100%',
           triggerHook: 0,
           offset: '0'
       })
       .setTween(timeline)
      //  .setTween(TweenMax.
       .setPin('#landing4')
       .addTo(controller);

      }else{


        let controller = new ScrollMagic.Controller();
        let timeline = gsap.timeline()

       timeline
       .to('.c1', 2, {

        y: "-100%",
        ease: Power3.linear
      }, "=-2")
       .from('.c2', 2, {

        y: "200%",
        ease: Power3.linear
       }, "=-1000")
       .to('.c2', 2, {

        y: "-200%",
        ease: Power3.linear
      }, "=-2")
       .from('.c3', 2, {

        y: "200%",
        ease: Power3.linear
       }, "=-1000")


 let scene = new ScrollMagic.Scene({
           triggerElement: '#landing4',
           duration: '100%',
           triggerHook: 0,
           offset: '0'
       })
       .setTween(timeline)
      //  .setTween(TweenMax.
       .setPin('#landing4')
       .addTo(controller);

      }

    }
    render(){

      return (
         <div  id="landing4" className="landing4">
             {this.props.isMobile()?null:<img className="landing4__hole" src={hole} alt=""/>}
             <div className="landing4__text">
               <div className="landing4__text_primary">indiaport is a goal is to improve</div>
               <div style={{overflow:"hidden"}}>
                 <div  style={{color:"#0076FF"}} className="landing4__text_secondary c1">transparency1</div>
                 <div  style={{color:"#C000FA", opacity:0}} className="landing4__text_secondary c2">Insurance</div>
                 <div  style={{color:"#0027FF", opacity:0}} className="landing4__text_secondary c3">Freight</div>
               </div>
             </div>
                <img className="landing4__circle" src={circle} alt=""/>
                <img className="landing4__smallShip" src={smallShip} alt=""/>
                <img className="landing4__smallShip ship" style={{opacity:0}}  src={smallShip} alt=""/>
                <img className="landing4__smallTruck" src={smallTruck} alt=""/>
                <img className="landing4__yellowPlane" src={yellowPlane} alt=""/>
         </div>
      )
    }
}

export default Landing4;
