import React, {Component} from "react"
import $ from "jquery"
import i from "../../../assets/images/i.svg"
import leaf2 from "../../../assets/images/leaf2.svg"
import halfArrow from "../../../assets/images/halfArrow.svg"
import box from "../../../assets/images/box.svg"
import s1 from "../../../assets/images/s1.svg"
import video from "../../../assets/images/video.svg"

class CbmCalc extends Component{


  componentDidMount=()=>{
    $(".navigation").css("background-color", "transparent");
    $(".navigation").css("position", "fixed");
    $(".navigation").css("margin", "0 25rem");

  }

  componentWillUnmount=()=>{
    $(".navigation").css("background-color", "white");
    $(".navigation").css("position", "static");
    $(".navigation").css("margin", "0 10vw");
  }

    render(){

      return (
         <div className="cbmCalc ">
             <div className="invoice__box">
                 <img className="invoice__box_bot" src={leaf2} alt=""/>
                 <img className="invoice__box_big cbmCalc__box_big" src={box} alt=""/>
                 <img className="invoice__box_i1" src={i} alt=""/>
                 <img className="invoice__box_arr" src={halfArrow} alt=""/>

             </div>


             <div className="invoice__head">HOW to use cbm calculator</div>
             <div className="invoice__video">
                 <img  className="invoice__video" src={video} alt=""/>
             </div>

             <div className="invoice__flex">
                  <img src={s1} alt=""/>
                  <div className="invoice__flex_text">
                       <div className="invoice__flex_text-1">Step 1</div>
                       <div className="invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                   </div>
             </div>

             <div className="invoice__flex">
                  <div className="invoice__flex_text invoice__flex_text--rev">
                       <div className="invoice__flex_text-1">Step 1</div>
                       <div className="invoice__flex_text-2 invoice__flex_text-2--rev">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="invoice__flex_text-3 invoice__flex_text-3--rev">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                  </div>
                  <img src={s1} alt=""/>
             </div>

             <div className="invoice__flex invoice__flex--last">
                  <img src={s1} alt=""/>
                  <div className="invoice__flex_text">
                       <div className="invoice__flex_text-1">Step 1</div>
                       <div className="invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                  </div>
             </div>
         </div>
      )
    }
}

export default CbmCalc;
