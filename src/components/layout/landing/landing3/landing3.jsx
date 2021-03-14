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
import yellowPlane from "../../../../assets/images/yellowPlane.svg"

import Aos from "aos"
import "aos/dist/aos.css"

class Landing3 extends Component{

    state={
      mobileNumber:0
    }

    mobileNumberIntervalFunc=null;

    mobileNumberInterval=()=>{
     this.mobileNumberIntervalFunc= setInterval(()=>{
          this.setState(s=>{return {mobileNumber:s.mobileNumber===2?0:s.mobileNumber+1}})
      }, 1000)
    }

    mobileNumberHandler=(num)=>{
      this.setState({
        mobileNumber:num
      })
      clearInterval(this.mobileNumberIntervalFunc);
    }


    componentDidMount=()=>{
      Aos.init({
        duration: 1000,
        delay: 100
      });

      this.mobileNumberInterval();


      $(function() {

         $(".landing3").mousewheel(function(event, delta) {
            this.scrollLeft -= (delta * 100);
            event.preventDefault();
         });
      });
    }

    render(){

      return (
         !this.props.mobile?
         <div className="landing3">
            <div className="landing3__wrapper">
                 <Link className="landing3__link" to="/freight">
                      <img data-aos="fade-right" className="landing3__link_img--plane" src={plane} alt=""/>
                      <img className="landing3__link_img" src={freight} alt=""/>
                      <img data-aos="fade-down" data-aos-easing="ease-in" className="landing3__link_img--abs" src={cargo} alt=""/>
                      <div className="landing3__link_text">
                          <div className='landing3__link_text-title'>Freight Forwarding</div>
                          <div className="landing2__flex_text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, voluptatum.</div>
                      </div>
                 </Link>
                 <Link className="landing3__link" to="/customClearance">
                     <img className="landing3__link_img" src={cc} alt=""/>
                     <img className="landing3__link_img--abs landing3__link_img--truck" src={truck} alt=""/>
                     <div className="landing3__link_text">
                         <div className='landing3__link_text-title'>Customer<br/>Clearance</div>
                         <div className="landing2__flex_text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, voluptatum.</div>
                     </div>
                 </Link>
                 <Link className="landing3__link" to="/insurance">
                     <img data-aos="fade-right" className="landing3__link_img--plane" src={yellowPlane} alt=""/>
                     <img className="landing3__link_img" src={insure} alt=""/>
                     <img data-aos="fade-down" data-aos-easing="ease-in" className="landing3__link_img--abs" src={box2} alt=""/>
                     <div className="landing3__link_text">
                         <div className='landing3__link_text-title'>Insurance<br/>for Product</div>
                         <div className="landing2__flex_text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, voluptatum.</div>
                     </div>

                 </Link>
             </div>


         </div>
         :
         <div className="landing3__mob">
             <div className="landing2__mob_head">Services</div>
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
                  <img src={this.state.mobileNumber===0?cc:this.state.mobileNumber===1?freight:insure} alt=""/>
                  <div className="landing3__mob_main-name">
                    {
                      this.state.mobileNumber===0?
                      <div>Custom<br/>
                      Clearance
                      </div>
                      :
                      this.state.mobileNumber===1?
                        <div>Freight<br/>
                        Forwarding
                        </div>
                        :
                        <div>Insurance<br/>
                        for Product
                        </div>

                    }
                  </div>
             </div>
         </div>
      )
    }
}

export default Landing3;
