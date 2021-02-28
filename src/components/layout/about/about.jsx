import React, {Component} from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
// import about from "../../../assets/images/about.jpg"

class About extends Component{

    componentDidMount=()=>{

      $(".about").ripples({
      resolution: 400,
      perturbance: .04
    })

      $(".navigation").css("background-color", "transparent");
      $(".navigation").css("position", "fixed");
      $(".navigation").css("margin", "0 10vw");

      // window.addEventListener("scroll",()=>{
      //    console.log(window.pageYOffset);
      //    let y = "scale(" + (1+ (window.pageYOffset/10000)).toString() + ")";
      //    $(".about__imgW_imgBack").css("transform",y);
      // })

    }

    componentWillUnmount=()=>{
      $(".navigation").css("background-color", "white");
      $(".navigation").css("position", "static");
      $(".navigation").css("margin", "0 10vw");
    }

    // <img className="about__imgW_imgBack" src={about} alt=""/>
    render(){

      return (
         <div className="about">
             <div className="about__imgW">
             </div>
             <div className="about__zIn">
                <div className="about__zIn_blue">digital</div>
                <div className="about__zIn_brand">India<br/>Port</div>
                <div className="about__zIn_head"><strong>INDIAPORT</strong> SERVICES</div>
                <div className="about__zIn_flex">
                    <div className="about__zIn_flex-card about__zIn_flex-card--side">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="1" viewBox="0 0 190 1">
                            <line id="Line_67" data-name="Line 67" x2="190" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </svg>
                        <div>custom<br/>housing<br/>agent</div>
                    </div>
                    <div className="about__zIn_flex-card about__zIn_flex-card--mid">

                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="1" viewBox="0 0 190 1">
                            <line id="Line_67" data-name="Line 67" x2="190" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </svg>
                        <div>digital<br/>freight<br/>renting</div>
                    </div>
                    <div className="about__zIn_flex-card about__zIn_flex-card--side">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="1" viewBox="0 0 190 1">
                            <line id="Line_67" data-name="Line 67" x2="190" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </svg>
                        <div>customised<br/>insurance</div>
                    </div>
                </div>
                <div className="about__zIn_head about__zIn_head_black"><strong>INDIA PORT</strong> TOOLS</div>
             </div>



             <div className="about__3">


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

                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">CA Abhishek Shah</h2>
                       <ul>
                          <li>Provides financial service and an explorer</li>
                       </ul>
                    </div>
                  </div>
              </div>
         </div>
      )
    }
}

export default About;
