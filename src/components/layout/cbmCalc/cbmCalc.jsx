import React, {Component} from "react"
import $ from "jquery"
import i from "../../../assets/images/i.svg"
import leaf2 from "../../../assets/images/leaf2.svg"
import halfArrow from "../../../assets/images/halfArrow.svg"
import box from "../../../assets/images/box.svg"
import s1 from "../../../assets/images/s1.png"
import plus from "../../../assets/images/plus.svg"
import dash from "../../../assets/images/dash.svg"
import video from "../../../assets/images/video.svg"
import add from "../../../assets/images/add.svg"


import Aos from "aos"
import "aos/dist/aos.css"

class CbmCalc extends Component{




  componentDidMount=()=>{
    $(".navigation").css("background-color", "transparent");
    $(".navigation").css("position", "fixed");
    // $(".navigation").css("margin", "0 25rem");

    Aos.init({
      duration: 2000,
      delay: 100
    });

  }

  componentWillUnmount=()=>{
    $(".navigation").css("background-color", "#F7F7F7");
    $(".navigation").css("position", "static");
    // $(".navigation").css("margin", "0 10vw");
  }

    render(){

      return (
         <div className="cbmCalc ">
             {!this.props.mobile?<div className="invoice__box">
                 <img className="invoice__box_bot" src={leaf2} alt=""/>
                 <img data-aos="fade-up" className="invoice__box_big cbmCalc__box_big" src={box} alt=""/>
                 <img className="invoice__box_i1" src={i} alt=""/>
                 <img className="invoice__box_arr" src={halfArrow} alt=""/>
                 <div className="cbmCalc__head">CBM Calculator</div>
                 <div className="invoice__box_go">GO</div>
                 <div className="cbmCalc__box_total  cbmCalc__mob--total">
                    <span className="cbmCalc__box_total-text">Total</span> <span className="cbmCalc__box_total-number">123456</span>
                 </div>

                 <table cellspacing="15" className="cbmCalc__table">
                    <thead>
                       <td>Sr.No.</td>
                       <td>Length</td>
                       <td>Width</td>
                       <td>Height</td>
                       <td>Unit</td>
                       <td>Unit</td>
                    </thead>
                    <tbody>
                       <tr>
                          <td className="cbmBack__table-sr"><p className="cbmCalc__p">1</p></td>
                          <td className="cbmBack__table-input"><input placeholder="len" type="text"/></td>
                          <td className="cbmBack__table-input"><input placeholder="wid" type="text"/></td>
                          <td className="cbmBack__table-input"><input placeholder="height" type="text"/></td>
                          <td className="cbmBack__table-input"><input placeholder="unit" type="text"/></td>
                          <td className="cbmCalc__box_total-number"><span>123</span></td>
                       </tr>

                       <tr>
                          <td className="cbmBack__table-sr"><p className="cbmCalc__secP cbmCalc__p"><img src={plus} alt="plus"/></p></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmCalc__box_total-number cbmCalc__box_total-number--background"><img src={dash} alt=""/></td>
                       </tr>

                       <tr>
                          <td className="cbmBack__table-sr"><p className="cbmCalc__secP cbmCalc__p"><img src={plus} alt="plus"/></p></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmCalc__box_total-number cbmCalc__box_total-number--background"><img src={dash} alt=""/></td>
                       </tr>

                       <tr>
                          <td className="cbmBack__table-sr"><p className="cbmCalc__secP cbmCalc__p"><img src={plus} alt="plus"/></p></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmCalc__box_total-number cbmCalc__box_total-number--background"><img src={dash} alt=""/></td>
                       </tr>

                       <tr>
                          <td className="cbmBack__table-sr"><p className="cbmCalc__secP cbmCalc__p"><img src={plus} alt="plus"/></p></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmBack__table-input"><input disabled={true} placeholder="" type="text"/></td>
                          <td className="cbmCalc__box_total-number cbmCalc__box_total-number--background"><img src={dash} alt=""/></td>
                       </tr>
                    </tbody>
                 </table>
             </div>:
             [ <h1 className="cbmCalc__mob_head">cbm calculator</h1>,
               <div className="cbmCalc__mob">
                  <img className="invoice__box_bot cbmCalc__mob--bot" src={leaf2} alt=""/>
                  <div className="cbmCalc__box_total  cbmCalc__mob--total">
                     <span className="cbmCalc__box_total-text">Total</span> <span className="cbmCalc__box_total-number">123456</span>
                  </div>
                  <div className="cbmCalc__mob_flex">
                    <span  className="cbmCalc__mob_flex-span0 cbmCalc__mob_flex-span1">1.</span>
                    <input placeholder="len" type="text"/>
                    <input placeholder="len" type="text"/>
                    <input placeholder="len" type="text"/>
                    <input placeholder="len" type="text"/>
                  </div>
                  <div  className="cbmCalc__mob_flex">
                     <span className="cbmCalc__mob_flex-span0 cbmCalc__mob_flex-span2">{""}</span>
                     <span className="cbmCalc__mob_flex-span2">Width</span>
                     <span className="cbmCalc__mob_flex-span2">Length</span>
                     <span className="cbmCalc__mob_flex-span2">Height</span>
                     <span className="cbmCalc__mob_flex-span2">Unit</span>
                  </div>
             </div>,
             <img src={add} alt=""/>]
           }


             <div className="invoice__head">HOW to use cbm calculator</div>
             <div className="invoice__video">
                 <img  className="invoice__video" src={video} alt=""/>
             </div>

             <div className="invoice__flex">
                  <img src={s1} alt=""/>
                  <div className="invoice__flex_text">
                       <div className="cbmCalc__black invoice__flex_text-1">Step 1</div>
                       <div className="cbmCalc__black invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="cbmCalc__black invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                   </div>
             </div>

             <div className="invoice__flex invoice__flex--rev">
                  <div className="invoice__flex_text invoice__flex_text--rev">
                       <div className="cbmCalc__black invoice__flex_text-1">Step 2</div>
                       <div className="cbmCalc__black invoice__flex_text-2 invoice__flex_text-2--rev">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="cbmCalc__black invoice__flex_text-3 invoice__flex_text-3--rev">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                  </div>
                  <img src={s1} alt=""/>
             </div>

             <div className="invoice__flex invoice__flex--last">
                  <img src={s1} alt=""/>
                  <div className="invoice__flex_text">
                       <div className="cbmCalc__black invoice__flex_text-1">Step 3</div>
                       <div className="cbmCalc__black invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="cbmCalc__black invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                  </div>
             </div>
         </div>
      )
    }
}

export default CbmCalc;
