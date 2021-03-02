import React, {Component} from "react"
import leaf1 from "../../../assets/images/leaf1.svg"
import leaf2 from "../../../assets/images/leaf2.svg"
import invoice from "../../../assets/images/invoice.svg"
import result from "../../../assets/images/result.svg"
import i from "../../../assets/images/i.svg"
import halfArrow from "../../../assets/images/halfArrow.svg"
import halfArrowRev from "../../../assets/images/halfArrowRev.svg"
import leaf3 from "../../../assets/images/leaf3.svg"
import video from "../../../assets/images/video.svg"
import swing from "../../../assets/images/swing.svg"
import s1 from "../../../assets/images/s1.png"
import imp from "../../../assets/images/imp.svg"


class Invoice extends Component{

    render(){

      return (
         <div className="invoice">
            <img className="invoice__swing" src={swing} alt=""/>
            <div className="invoice__box">
                <img className="invoice__box_top" src={leaf1} alt=""/>
                <img className="invoice__box_bot" src={leaf2} alt=""/>
                <img className="invoice__box_big" src={invoice} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <img className="invoice__box_i2" src={i} alt=""/>
                <img className="invoice__box_arr" src={halfArrow} alt=""/>
                <div className="invoice__box_step">
                       <div className="invoice__box_step_1">cif in inr</div>
                       <div className="invoice__box_step_2">Step 1</div>
                </div>
                <div className="invoice__box_go">GO</div>
                <div className="cbmCalc__head invoice__head" id="invoice__head">Invoice CALCULATOR</div>
            </div>



            <div className="invoice__box">
                <img className="invoice__box_top" src={leaf1} alt=""/>
                <img className="invoice__box_bot" src={leaf2} alt=""/>
                <img className="invoice__box_bot-left" src={leaf3} alt=""/>
                <img className="invoice__box_big-duty" src={invoice} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <img className="invoice__box_i2" src={i} alt=""/>
                <img className="invoice__box_arr" src={halfArrow} alt=""/>
                <img className="invoice__box_arr-rev" src={halfArrowRev} alt=""/>
                <div className="invoice__box_step">
                       <div className="invoice__box_step_1">cif in inr</div>
                       <div className="invoice__box_step_2">Step 1</div>
                </div>
                <div className="invoice__box_go">GO</div>
                <div className="invoice__box_back">BACK</div>
                <div className="cbmCalc__head invoice__head" id="invoice__head">Duty CALCULATOR</div>

            </div>


            <div className="invoice__box">
                <img className="invoice__box_top" src={leaf1} alt=""/>
                <img className="invoice__box_bot" src={leaf2} alt=""/>
                <img className="invoice__box_big-res" src={result} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <img className="invoice__box_i2" src={i} alt=""/>
                <img className="invoice__box_arr" src={halfArrow} alt=""/>
                <div className="invoice__box_step">
                       <div className="invoice__box_step_1">cif in inr</div>
                       <div className="invoice__box_step_2">Step 1</div>
                </div>
                <div className="invoice__box_go">GO</div>
                <div className="cbmCalc__head invoice__head" id="invoice__head">RESULT</div>

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

export default Invoice;
