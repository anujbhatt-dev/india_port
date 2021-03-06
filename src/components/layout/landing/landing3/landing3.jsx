import React, {Component} from "react"
import {Link} from "react-router-dom"
import $ from "jquery";
import mousewheel from "jquery-mousewheel"
import cc from "../../../../assets/images/cc.svg"
import freight from "../../../../assets/images/freight.svg"
import insure from "../../../../assets/images/insure.svg"
import truck from "../../../../assets/images/smallTruck.svg"
import plane from "../../../../assets/images/plane.svg"
import cargo from "../../../../assets/images/cargo.svg"
import box2 from "../../../../assets/images/box2.svg"
import globe from "../../../../assets/images/globe.svg"
import yellowPlane from "../../../../assets/images/yellowPlane.svg"
import graPlane from "../../../../assets/images/graPlane.svg"
import bar from "../../../../assets/images/bar.svg"
import line from "../../../../assets/images/line.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import gsap from "gsap"
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/gsap-core"
import {Power3,Power0} from "gsap/gsap-core"
import {TweenMax} from "gsap/gsap-core"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);



class Landing3 extends Component{
  state={
    mobileNumber:0,
    show:false,
    flag:0,
  }

  mobileNumberIntervalFunc=null;

  mobileNumberInterval=()=>{
   this.mobileNumberIntervalFunc= setInterval(()=>{
        this.setState(s=>{return {mobileNumber:s.mobileNumber===2?0:s.mobileNumber+1}})
    }, 2000)
  }

  mobileNumberHandler=(num)=>{
    this.setState({
      mobileNumber:num
    })
    clearInterval(this.mobileNumberIntervalFunc);
  }


  componentDidMount=()=>{

    $(".landing3__link1").mousemove((e)=>{
      let x = e.pageX - $('.landing3__link1').offset().left;
      let y = e.pageY - $('.landing3__link1').offset().top;
       $(".cursor__1").css("top",y)
       $(".cursor__1").css("left",x)
    })

    $(".landing3__link2").mousemove((e)=>{
      let x = e.pageX - $('.landing3__link2').offset().left;
      let y = e.pageY - $('.landing3__link2').offset().top;
       $(".cursor__2").css("top",y)
       $(".cursor__2").css("left",x)
    })

    $(".landing3__link3").mousemove((e)=>{
      let x = e.pageX - $('.landing3__link3').offset().left;
      let y = e.pageY - $('.landing3__link3').offset().top;
       $(".cursor__3").css("top",y)
       $(".cursor__3").css("left",x)
    })

    $(".landing3__link").mouseleave((e)=>{
       $(".cursor").css("top","-20rem")
       $(".cursor").css("left","-20rem")
    })

    Aos.init({
      duration: 1000,
      delay: 100
    });

    this.mobileNumberInterval();



    if(!this.props.isMobile()){
    let controller = new ScrollMagic.Controller();
     let timeline = gsap.timeline()

    timeline
    .to('.landing3__wrapper', 1000, {
      left: "-200%",
      ease: Power3.linear
     })
     .to('.landing2__motion_mode--rev', 1000, {
       x: -50,
       ease: Power3.linear
     },"-=1000")
     .to('.landing2__motion_bar--rev', 1000, {
       x: -50,
       ease: Power3.linear
     },"-=1000")
     .to(".globe", 600,
      {css:{scaleX:60, scaleY:60, zIndex:100},
      ease: Power3.linear})


     let scene = new ScrollMagic.Scene({
       triggerElement: '.landing3',
       duration: '100%',
       triggerHook: 0,
       offset: '0'
   })
   .setTween(timeline)
   .setPin('.landing3')
   .addTo(controller);
 }

}



    render(){

      return (
         !this.props.isMobile()?

             <div id="landing3" className="landing3">
                    <img className="landing3__link_globe globe"  src={globe} alt=""/>
                    <div className="landing3__wrapper">
                         <a className="landing3__link landing3__link2" href="/customClearance">
                             <img className="landing3__link_img" src={cc} alt=""/>
                             <img className="landing3__link_img--abs landing3__link_img--truck" src={truck} alt=""/>
                             <div className="landing3__link_text">
                                 <div className='landing3__link_text-title'>Customs <br/>Clearance</div>
                                 <div className="landing2__flex_text-content">We make your documents hassle-free and manage all your shipment activities from transport and booking to selecting a custom house agent, IndiaPort gets all documents in one form to lessen your load with its Multiple Custom Document services.</div>
                             </div>
                             <div className="cursor cursor__2">Explore</div>
                         </a>
                         <a className="landing3__link landing3__link3" href="/insurance">
                             <img data-aos="fade-right" className="landing3__link_img--plane" src={yellowPlane} alt=""/>
                             <img className="landing3__link_img" src={insure} alt=""/>
                             <img data-aos="fade-down" data-aos-easing="ease-in" className="landing3__link_img--abs" src={box2} alt=""/>
                             <div className="landing3__link_text">
                                 <div className='landing3__link_text-title'>Insurance<br/>for product</div>
                                 <div className="landing2__flex_text-content">With IndiaPort, you can trade with confidence, without worrying about physical damage of product to the handling of goods at various stages</div>
                             </div>
                             <div className="cursor cursor__3">Explore</div>
                         </a>
                         <a className="landing3__link landing3__link1" href="/freight">
                              <img data-aos="fade-right" className="landing3__link_img--plane" src={plane} alt=""/>
                              <img className="landing3__link_img" src={freight} alt=""/>
                              <img data-aos="fade-down" data-aos-easing="ease-in" className="landing3__link_img--abs" src={cargo} alt=""/>
                              <div className="landing3__link_text">
                                  <div className='landing3__link_text-title'>Digital Freight <br/> Forwarder</div>
                                  <div className="landing2__flex_text-content">IndiaPort is a technology company closely working with shipping lines and custom brokers to provide you with trouble-free trading. Making sure your hours of work is done in a minute and you save time and avoid unnecessary fees 🙅🏻‍♀️</div>
                              </div>
                              <div className="cursor cursor__1">Explore</div>
                         </a>
                     </div>
                     <div className="landing2__motion landing2__motion--rev">
                         <img  className="landing2__motion_bar landing2__motion_bar--rev pl2" style={{opacity:0}} src={bar} alt=""/>
                         <img  className="landing2__motion_line landing2__motion_line--rev" src={line} alt=""/>
                         <img  className="landing2__motion_mode landing2__motion_mode--rev pl1" style={{opacity:0}} src={truck} alt=""/>
                         <img  className="landing2__motion_mode landing2__motion_mode--rev pl3" style={{opacity:0}}  src={truck} alt=""/>
                     </div>
                     <div className="landing3__over">.</div>
                     <div className="landing3__over2">.</div>
                     <div className="landing3__over3">.</div>
                     <div className="landing3__over4">.</div>
             </div>
         :
         <div className="landing3__mob">
             <div className="head" style={{paddingTop:"5rem"}}>Services</div>
             <div className="landing3__mob_dots">
                 <svg onClick={()=>this.mobileNumberHandler(0)}  xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27">
                  <g id="Group_6152" data-name="Group 6152" transform="translate(-24 -1616)">
                    <ellipse id="Ellipse_347" data-name="Ellipse 347" cx="13" cy="12.5" rx="13" ry="12.5" transform="translate(24 1618)" fill={this.state.mobileNumber===0?"#363636":"#676565"}/>
                    <text id="_1" data-name="1" transform="translate(37 1638)" fill="#fff" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="-5.391" y="0">1</tspan></text>
                  </g>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="1" viewBox="0 0 11 1">
                    <line id="Line_65" data-name="Line 65" x2="11" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>


                  <svg onClick={()=>this.mobileNumberHandler(1)}  xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26">
                    <g id="Group_6153" data-name="Group 6153" transform="translate(-70 -1617)">
                      <circle id="Ellipse_348" data-name="Ellipse 348" cx="11" cy="11" r="11" transform="translate(70 1620)" fill={this.state.mobileNumber===1?"#363636":"#676565"}/>
                      <text id="_2" data-name="2" transform="translate(81 1638)" fill="#b4b4b4" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="-5.121" y="0">2</tspan></text>
                    </g>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="1" viewBox="0 0 11 1">
                    <line id="Line_65" data-name="Line 65" x2="11" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>


                  <svg onClick={()=>this.mobileNumberHandler(2)}  xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26">
                    <g id="Group_6154" data-name="Group 6154" transform="translate(-112 -1617)">
                      <circle id="Ellipse_349" data-name="Ellipse 349" cx="11" cy="11" r="11" transform="translate(112 1620)" fill={this.state.mobileNumber===2?"#363636":"#676565"}/>
                      <text id="_3" data-name="3" transform="translate(123 1638)" fill="#b4b4b4" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="-5.121" y="0">3</tspan></text>
                    </g>
                  </svg>
             </div>
             <div className="landing3__mob_main">
                  <img className={this.state.mobileNumber===0?"move1":this.state.mobileNumber===1?'move2':"move3"} src={this.state.mobileNumber===0?cc:this.state.mobileNumber===1?freight:insure} alt=""/>
                  <div className="landing3__mob_main-name">
                    {
                      this.state.mobileNumber===0?
                      <div className="moverev1">Customs <br/>
                      Clearance
                      </div>
                      :
                      this.state.mobileNumber===1?
                        <div  className="moverev2">Insurance for<br/>
                        product 
                        </div>
                        :
                        <div  className="moverev3">Digital Freight<br/>
                        Forwarder
                        </div>

                    }
                  </div>
             </div>
         </div>
      )
    }
}

export default Landing3;
