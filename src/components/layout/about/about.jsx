import React, {Component} from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import about from "../../../assets/images/about.png"
import blur from "../../../assets/images/blur.svg"

class About extends Component{



    componentDidMount=()=>{

      window.scrollTo({
        top:0,
        behavior:"auto"
      })

      $(".about").ripples({
      resolution: 400,
      perturbance: .04
    })

      $(".navigation").css("background-color", "transparent");
      $(".navigation").css("position", "fixed");
      // $(".navigation").css("margin", "0 10vw");

      window.addEventListener("scroll",()=>{
         console.log(window.pageYOffset);
         let y = "scale(" + (1+ (window.pageYOffset/1000)).toString() + ")";
         $(".about__zIn_imgW_imgBack").css("transform",y);
      })

    }

    componentWillUnmount=()=>{
      $(".navigation").css("background-color", "#F7F7F7");
      $(".navigation").css("position", "static");
      // $(".navigation").css("margin", "0 10vw");
    }

    render(){

      return (
         <div className="about">

              <div className="about__1">
                  <img src="https://i.ibb.co/6BMGZqb/7b2ef91d-5015-4ff8-a28c-05fbd44eaa32.jpg" alt=""/>
                  <div className="about__1_wrap">
                    <div className="about__1_blue">digital</div>
                    <div className="about__1_whiteBig"><div>India</div><div>Port</div></div>
                    <div className="about__1_whiteSmall"><strong>IndiaPort</strong> Services</div>
                  </div>
              </div>

              <div className="about__2">
                   <div className="about__2_box">
                      <div className="about__2_box-blur about__2_box-blur--mod">.</div>
                      <div className="about__2_box-count">1</div>
                      <div className="about__2_box-ser">custom housing agent</div>
                   </div>

                   <div className="about__2_box">
                      <div className="about__2_box-blur about__2_box-blur--mod">.</div>
                      <div className="about__2_box-count">2</div>
                      <div className="about__2_box-ser">custom housing agent</div>
                   </div>

                   <div className="about__2_box">
                      <div className="about__2_box-blur about__2_box-blur--mod">.</div>
                      <div className="about__2_box-count">3</div>
                      <div className="about__2_box-ser">custom housing agent</div>
                   </div>

                   <div className="about__2_box">
                      <div className="about__2_box-blur about__2_box-blur--mod">.</div>
                      <div className="about__2_box-count">4</div>
                      <div className="about__2_box-ser">custom housing agent</div>
                   </div>

                   <div className="about__2_box">
                      <div className="about__2_box-blur about__2_box-blur--mod">.</div>
                      <div className="about__2_box-count">5</div>
                      <div className="about__2_box-ser">custom housing agent</div>
                   </div>
              </div>

             <div className="about__3">
                     <div className="landing2__mob_head head" id="about__3_head">TEAM</div>
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Vedant Kothari</h2>
                        <ul>
                           <li>Founder of EximEducation, a chef in leisure time </li>
                        </ul>
                     </div>
                     <div className="about__3_row">
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Sanesh Sagvekar</h2>
                        <ul>
                           <li>Front & back end developer and a great photographer </li>
                        </ul>
                     </div>


                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Anuj Bhatt & Sagar Panwar</h2>
                        <ul>
                           <li>Web developers</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Zeba Barudgar</h2>
                        <ul>
                           <li>Our Edu tech-head, content writer and a poet when in spirit</li>
                        </ul>
                     </div>
                  </div>
                  <div className="about__3_row">
                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">Ritika Tatiya</h2>
                       <ul>
                          <li>Digital marketer, content creator and a wanderlust lover</li>
                       </ul>
                    </div>

                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">Rushikesh Kamble</h2>
                       <ul>
                          <li>Graphics designer UI/UX and a sports enthusiast</li>
                       </ul>
                    </div>
                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">Pramod Kodag</h2>
                       <ul>
                          <li>Developer and an excellent singer</li>
                       </ul>
                    </div>


                  </div>
              </div>
         </div>
      )
    }
}

export default About;
