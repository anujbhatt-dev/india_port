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
import tick from "../../../assets/images/tick.svg"
import noTick from "../../../assets/images/noTick.svg"
import cash from "../../../assets/images/cash.svg"
import cash2 from "../../../assets/images/cash2.svg"

import Aos from "aos"
import "aos/dist/aos.css"



class Invoice extends Component{

  componentDidMount=()=>{
    Aos.init({
      duration: 2000,
      delay: 100
    });
  }

    render(){

      return (
         <div className="invoice">
            <img className="invoice__swing" src={swing} alt=""/>
            <div className="invoice__box">
                <img className="invoice__box_top" src={leaf1} alt=""/>
                <img className="invoice__box_bot" src={leaf2} alt=""/>
                <img data-aos="fade-right" className="invoice__box_big" src={invoice} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <img className="invoice__box_i2" src={i} alt=""/>
                <img data-aos="fade-down" className="invoice__box_cash" src={cash} alt=""/>
                <img data-aos="fade-right" className="invoice__box_arr" src={halfArrow} alt=""/>
                <div className="invoice__box_step">
                       <div className="invoice__box_step_1">cif in inr</div>
                       <div className="invoice__box_step_2">Step 1</div>
                </div>
                <div className="cbmCalc__box_total">
                   <span className="cbmCalc__box_total-text">CIF IN INR</span> <span className="cbmCalc__box_total-number">123456</span>
                </div>
                <div data-aos="fade-down" className="invoice__box_go">GO</div>
                <div className="cbmCalc__head invoice__head" id="invoice__head">Invoice CALCULATOR</div>
                <div className="invoice__box_flexWrap">
                  <div className="invoice__box_flex">
                      <div className="invoice__box_flex-head">Currency</div>
                      <div>
                         <img className="imp" src={imp} alt=""/>
                         <input className="invoice__box_flex-input" type="text"/>
                      </div>
                      <div className="invoice__box_flex-head">Exchange Rate</div>
                      <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="123" type="text"/>
                      <div className="invoice__box_flex-head"><div>Invoice Value</div><div className="invoice__box_flex-head-2">(in selected currencies)</div></div>
                      <input className="invoice__box_flex-input" type="text"/>
                  </div>

                  <div className="invoice__box_flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55">
                        <g id="Group_3232" data-name="Group 3232" transform="translate(-608 -497)">
                          <g id="Rectangle_314" data-name="Rectangle 314" transform="translate(608 497)" fill="none" stroke="#0239ff" stroke-width="2">
                            <rect width="58" height="55" rx="10" stroke="none"/>
                            <rect x="1" y="1" width="56" height="53" rx="9" fill="none"/>
                          </g>
                          <path id="Icon_simple-verizon" data-name="Icon simple-verizon" d="M26.59,5.262c4.28-3.593.023,1.654-2.821,6.51s-8.037,15.977-8.037,15.977-4.254,2.618-6.6-.63S3,14.126,3,14.126s2.093-1.986,4.035,0,5.254,6.183,5.254,6.183S22.31,8.855,26.59,5.262Z" transform="translate(623.695 506.255)" fill="#0045ff"/>
                        </g>
                      </svg>


                       <div class="invoice__box_flex-smallHead">Freight (20%)</div>
                       <div class="invoice__box_flex-smallHead">(20%) USD</div>
                       <input className="invoice__box_flex-input" type="text"/>
                       <div class="invoice__box_flex-smallHead"> <div>Freight</div> <div className="invoice__box_flex-head-2">(If Known) (20%)</div></div>
                       <input className="invoice__box_flex-input" type="text"/>
                  </div>

                  <div className="invoice__box_flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55">
                        <g id="Path_2407" data-name="Path 2407" fill="none">
                        <path d="M10,0H48A10,10,0,0,1,58,10V45A10,10,0,0,1,48,55H10A10,10,0,0,1,0,45V10A10,10,0,0,1,10,0Z" stroke="none"/>
                        <path d="M 10 2 C 5.588790893554688 2 2 5.588790893554688 2 10 L 2 45 C 2 49.41120910644531 5.588790893554688 53 10 53 L 48 53 C 52.41120910644531 53 56 49.41120910644531 56 45 L 56 10 C 56 5.588790893554688 52.41120910644531 2 48 2 L 10 2 M 10 0 L 48 0 C 53.5228385925293 0 58 4.477149963378906 58 10 L 58 45 C 58 50.5228385925293 53.5228385925293 55 48 55 L 10 55 C 4.477149963378906 55 0 50.5228385925293 0 45 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z" stroke="none" fill="#0239ff"/>
                        </g>
                      </svg>

                      <div class="invoice__box_flex-smallHead">Insurance (20%)</div>
                      <div class="invoice__box_flex-smallHead">(20%) USD</div>
                      <input disabled={true} className="invoice__box_flex-input" type="text"/>
                      <div class="invoice__box_flex-smallHead"> <div>Insurance</div> <div className="invoice__box_flex-head-2">(If Known) (20%)</div></div>
                      <input disabled={true} className="invoice__box_flex-input" type="text"/>

                  </div>
                </div>
            </div>



            <div className="invoice__box invoice__box--duty">
                <img className="invoice__box_top" src={leaf1} alt=""/>
                <img className="invoice__box_bot" src={leaf2} alt=""/>
                <img className="invoice__box_bot-left" src={leaf3} alt=""/>
                <img data-aos="fade-right" className="invoice__box_big-duty" src={invoice} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <img className="invoice__box_i2" src={i} alt=""/>
                <img data-aos="fade-down" className="invoice__box_cash invoice__box_cash--2 " src={cash} alt=""/>
                <img data-aos="fade-right" className="invoice__box_arr" src={halfArrow} alt=""/>
                <img data-aos="fade-left" className="invoice__box_arr-rev" src={halfArrowRev} alt=""/>
                <div className="invoice__box_step">
                       <div className="invoice__box_step_1">cif in inr</div>
                       <div className="invoice__box_step_2">Step 2</div>
                </div>
                <div data-aos="fade-down" className="invoice__box_go">GO</div>
                <div  data-aos="fade-down" className="invoice__box_back">BACK</div>
                <div className="cbmCalc__head invoice__head" id="invoice__head">Duty CALCULATOR</div>
                <div className="invoice__box_quater invoice__box_quater--1">
                      <div>
                          <div className="invoice__box_quater-step">1</div>
                          <div className="impWrap invoice__box_quater-text">Basic duty %<br/>(20%) <img className="imp" src={imp} alt=""/>  </div>
                      </div>
                      <div>
                          <input className="invoice__box_flex-input" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">%</div>
                          <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">INR</div>
                      </div>

                </div>

                <div className="invoice__box_quater invoice__box_quater--2">
                      <div>
                          <div className="invoice__box_quater-step">2</div>
                          <div className="impWrap invoice__box_quater-text">SWS %<br/>(20%) <img className="imp" src={imp} alt=""/>  </div>
                      </div>
                      <div>
                          <input className="invoice__box_flex-input" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">%</div>
                          <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">INR</div>
                      </div>

                </div>

                <div className="invoice__box_quater invoice__box_quater--3">
                      <div>
                          <div className="invoice__box_quater-step">3</div>
                          <div className="impWrap invoice__box_quater-text">Basic duty %<br/>(20%) <img className="imp" src={imp} alt=""/>  </div>
                      </div>
                      <div>
                          <input className="invoice__box_flex-input" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">%</div>
                          <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">INR</div>
                      </div>

                </div>

                <div className="invoice__box_quater invoice__box_quater--4">
                      <div>
                          <div className="invoice__box_quater-step">4</div>
                          <div className="impWrap invoice__box_quater-text">Basic duty %<br/>(20%) <img className="imp" src={imp} alt=""/>  </div>
                      </div>
                      <div>
                          <input className="invoice__box_flex-input" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">%</div>
                          <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                          <div className="invoice__box_quater-bet">INR</div>
                      </div>

                </div>
            </div>


            <div className="invoice__box">
                <img className="invoice__box_top" src={leaf1} alt=""/>
                <img className="invoice__box_bot" src={leaf2} alt=""/>
                <img className="invoice__box_bot-left" src={leaf3} alt=""/>
                <img data-aos="fade-right" className="invoice__box_big-res" src={result} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <img className="invoice__box_i2" src={i} alt=""/>
                <img data-aos="fade-down" className="invoice__box_cash invoice__box_cash--3 " src={cash2} alt=""/>
                <img data-aos="fade-right" className="invoice__box_arr" src={halfArrow} alt=""/>
                <img data-aos="fade-left" className="invoice__box_arr-rev" src={halfArrowRev} alt=""/>
                <div className="invoice__box_step">
                       <div className="invoice__box_step_1">cif in inr</div>
                       <div className="invoice__box_step_2">Step 3</div>
                </div>
                <div data-aos="fade-down" className="invoice__box_go">GO</div>
                <div data-aos="fade-down" className="invoice__box_back">Back</div>
                <div className="cbmCalc__head invoice__head" id="invoice__head">RESULT</div>

                <div style={{marginTop:"6rem",marginleft:"16rem"}} className="invoice__box_flexWrap">
                    <div style={{marginBottom:"6rem"}} className="invoice__box_flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55">
                          <g id="Group_3232" data-name="Group 3232" transform="translate(-608 -497)">
                            <g id="Rectangle_314" data-name="Rectangle 314" transform="translate(608 497)" fill="none" stroke="#0239ff" stroke-width="2">
                              <rect width="58" height="55" rx="10" stroke="none"/>
                              <rect x="1" y="1" width="56" height="53" rx="9" fill="none"/>
                            </g>
                            <path id="Icon_simple-verizon" data-name="Icon simple-verizon" d="M26.59,5.262c4.28-3.593.023,1.654-2.821,6.51s-8.037,15.977-8.037,15.977-4.254,2.618-6.6-.63S3,14.126,3,14.126s2.093-1.986,4.035,0,5.254,6.183,5.254,6.183S22.31,8.855,26.59,5.262Z" transform="translate(623.695 506.255)" fill="#0045ff"/>
                          </g>
                        </svg>

                        <div className="invoice__box_flex-head">Anti Dumping Usd</div>
                        <input className="invoice__box_flex-input" placeholder="1213" type="text"/>
                        <div className="invoice__box_flex-head">Anti Dumping %</div>
                        <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                    </div>

                    <div className="invoice__box_flex">
                        <div className="impWrap">
                           <img className="imp" src={imp} alt=""/>
                           <div className="invoice__box_flex-head">Total Duties</div>
                        </div>
                        <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                        <div className="invoice__box_flex-head">Anti Dumping INR</div>
                        <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                        <div className="impWrap">
                           <img className="imp" src={imp} alt=""/>
                           <div className="invoice__box_flex-head"><div>CIF Total</div><div className="invoice__box_flex-head-2">(in selected currencies)</div></div>
                        </div>
                        <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>


                    </div>
                    <div className="tots">

                        <div className="tots__div">
                          <div className="invoice__box_flex-head" style={{marginRight:"3rem"}}><div style={{fontSize:"3rem"}}>Total</div><div className="invoice__box_flex-head-2">(Including Dities)</div></div>
                        </div>

                        <input className="invoice__box_flex-input invoice__box_flex-input--ex" placeholder="1213" type="text"/>
                    </div>
                </div>

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

            <div className="invoice__flex  invoice__flex--rev">
                 <div className="invoice__flex_text invoice__flex_text--rev">
                      <div className="invoice__flex_text-1">Step 2</div>
                      <div className="invoice__flex_text-2 invoice__flex_text-2--rev">Easy use<br/>of cbm<br/>calculator</div>
                      <div className="invoice__flex_text-3 invoice__flex_text-3--rev">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                 </div>
                 <img src={s1} alt=""/>
            </div>

            <div className="invoice__flex invoice__flex--last">
                 <img src={s1} alt=""/>
                 <div className="invoice__flex_text">
                      <div className="invoice__flex_text-1">Step 3</div>
                      <div className="invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                      <div className="invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                 </div>
            </div>

         </div>
      )
    }
}

export default Invoice;
