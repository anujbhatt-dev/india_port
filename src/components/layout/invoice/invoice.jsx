import React, { Component } from "react";
import leaf1 from "../../../assets/images/leaf1.svg";
import leaf2 from "../../../assets/images/leaf2.svg";
import invoice from "../../../assets/images/invoice.svg";
import result from "../../../assets/images/result.svg";
import i from "../../../assets/images/i.svg";
import halfArrow from "../../../assets/images/halfArrow.svg";
import halfArrowRev from "../../../assets/images/halfArrowRev.svg";
import leaf3 from "../../../assets/images/leaf3.svg";
import video from "../../../assets/images/video.svg";
import swing from "../../../assets/images/swing.svg";
import s1 from "../../../assets/images/s1.png";
import imp from "../../../assets/images/imp.svg";
import tick from "../../../assets/images/tick.svg";
import noTick from "../../../assets/images/noTick.svg";
import cash from "../../../assets/images/cash.svg";
import cash2 from "../../../assets/images/cash2.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

// "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=y&apiKey=75e207caf04e6dd58a9b"
// "https://free.currconv.com/api/v7/currencies?apiKey=75e207caf04e6dd58a9b"

class Invoice extends Component {
  state = {
    step1: {
      currency: "INR",
      currencyOptions: [],
      exchangeRate: "1",
      invoiceValue: 0.0,
      freightD: false,
      freight: 0,
      insD: false,
      ins: 0,
      total: "0",
      calculated: false,
      calculate: false,
    },
    step2: {
      basicDuty: 0,
      sws: 0,
      cvd: 0,
      gst: 0,
      basicDutyVal: 0,
      swsVal: 0,
      cvdVal: 0,
      gstVal: 0,
      total: "0",
      calculated: false,
      updated: true,
      calculate: false,
    },
    step3: {
      antiDumpP: 0,
      antidump: 0,
      total: "0",
      calculated: false,
      calculate: false,
      update: false,
      choosed: -1,
    },
  };

  componentDidMount = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    Aos.init({
      duration: 2000,
      delay: 100,
    });

    axios
      .get(
        "https://free.currconv.com/api/v7/currencies?apiKey=75e207caf04e6dd58a9b",
      )
      .then(
        (res) => {
          let step1 = { ...this.state.step1 };
          step1.currencyOptions = Object.keys(res.data.results);
          this.setState({ step1: step1 });
        },
        //  console.log(Object.keys(res.data.results))
      )
      .catch((err) => alert("please check your network"));
  };

  componentDidUpdate = () => {
    if (!this.state.step2.updated) {
      let cif = this.state.step1.calculated ? this.state.step1.total : 0;
      let basicDutyVal = (cif * this.state.step2.basicDuty) / 100;
      let swsVal = (basicDutyVal * this.state.step2.sws) / 100;
      let cvdVal = ((basicDutyVal + swsVal + cif) * this.state.step2.cvd) / 100;
      let gstVal =
        ((cvdVal + swsVal + basicDutyVal + cif) * this.state.step2.gst) / 100;

      let step2 = {
        ...this.state.step2,
        basicDutyVal: basicDutyVal,
        swsVal: swsVal,
        cvdVal: cvdVal,
        gstVal: gstVal,
        updated: true,
      };
      let step3 = {
        ...this.state.step3,
        updated: false,
        calculated: false,
        total: "0",
      };

      this.setState({ step2: step2, step3: step3 });
    }

    if (this.state.step1.calculate) {
      let inr = this.state.step1.invoiceValue * this.state.step1.exchangeRate;
      let total =
        inr +
        (this.state.step1.freightD
          ? (inr * 20) / 100
          : this.state.step1.freight * this.state.step1.exchangeRate) +
        (this.state.step1.insD
          ? (inr * 1.15) / 100
          : this.state.step1.ins * this.state.step1.exchangeRate);

      let step1 = { ...this.state.step1 };
      step1.calculated = true;
      step1.total = total;
      step1.calculate = false;
      let step2 = { ...this.state.step2, updated: false };
      let step3 = {
        ...this.state.step3,
        updated: false,
        calculated: false,
        total: "0",
      };
      this.setState({ step1: step1, step2: step2, step3: step3 });
    }

    if (this.state.step2.calculate) {
      let total =
        this.state.step2.swsVal +
        this.state.step2.basicDutyVal +
        this.state.step2.cvdVal +
        this.state.step2.gstVal;
      let step2 = { ...this.state.step2 };
      step2.total = total;
      step2.calculated = true;
      step2.calculate = false;
      let step3 = {
        ...this.state.step3,
        updated: false,
        calculated: false,
        total: "0",
      };

      this.setState({ step2: step2, step3: step3 });
    }

    if (this.state.step3.calculate) {
      let inr = this.state.step1.total + this.state.step2.total;
      let total =
        this.state.step3.choosed === -1
          ? this.state.step3.antidump * this.state.step1.exchangeRate
          : inr * this.state.step3.antiDumpP;
      let step3 = {
        ...this.state.step3,
        total: total,
        updated: true,
        calculate: false,
      };
      console.log(this.state.step3);
      this.setState({ step3: step3 });
    }
  };

  // STEP1
  // --------------------------------------------------------------------------------------------------
  exchangeRateHandler = (e) => {
    // console.log(e)
    let val = e.target.value;

    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=${val}_INR&compact=y&apiKey=75e207caf04e6dd58a9b`,
      )
      .then((res) => {
        let step1 = { ...this.state.step1 };
        // console.log(res.data)
        step1.exchangeRate = res.data[`${val}_INR`]["val"];
        step1.calculated = false;
        step1.total = "0";
        step1.currency = val;
        let step2 = {
          ...this.state.step2,
          updated: false,
          calculated: false,
          total: "0",
        };
        let step3 = {
          ...this.state.step3,
          updated: false,
          calculated: false,
          total: "0",
        };
        this.setState({ step1: step1, step2: step2, step3: step3 });
      });
  };

  step1Toggler = (name) => {
    let step1 = { ...this.state.step1 };

    step1[name] = !step1[name];
    step1.calculated = false;
    step1.total = "0";
    let step2 = {
      ...this.state.step2,
      updated: false,
      calculated: false,
      total: "0",
    };
    let step3 = {
      ...this.state.step3,
      updated: false,
      calculated: false,
      total: "0",
    };
    this.setState({ step1: step1, step2: step2, step3: step3 });
  };

  step1ChangeHandler = (e) => {
    let step1 = { ...this.state.step1 };
    step1[e.target.name] = +e.target.value;
    step1.calculated = false;
    step1.total = "0";
    let step2 = {
      ...this.state.step2,
      updated: false,
      calculated: false,
      total: "0",
    };
    let step3 = {
      ...this.state.step3,
      updated: false,
      calculated: false,
      total: "0",
    };
    this.setState({ step1: step1, step2: step2, step3: step3 });
  };

  step1Calculator = () => {
    let step1 = { ...this.state.step1 };
    step1.calculate = true;
    this.setState({ step1: step1 });
  };
  // -----------------------------------------------------------------------------------------------------------------------
  //step 2

  step2BackHandler = () => {
    let step2 = {
      basicDuty: 0,
      sws: 0,
      cvd: 0,
      gst: 0,
      basicDutyVal: 0,
      swsVal: 0,
      cvdVal: 0,
      gstVal: 0,
      total: "0",
      calculated: false,
      updated: true,
    };

    let step1 = {
      ...this.state.step1,
      calculated: false,
      total: "0",
    };

    let step3 = {
      antiDumpP: 0,
      antidump: 0,
      total: "0",
      calculated: false,
      calculate: false,
      update: false,
      choosed: -1,
    };
    this.setState({ step1: step1, step2: step2, step3: step3 });
  };

  step2ChangeHandler = (e) => {
    let step2 = { ...this.state.step2 };
    step2[e.target.name] = +e.target.value;
    step2.calculated = false;
    step2.total = "0";
    step2.updated = false;
    let step3 = {
      ...this.state.step3,
      updated: false,
      calculated: false,
      total: "0",
    };
    this.setState({ step2: step2, step3: step3 });
  };

  step2Calculator = () => {
    if (!this.state.step1.calculated) return;

    let step2 = { ...this.state.step2, calculate: true };
    this.setState({ step2: step2 });
  };

  // ----------------------------------------------------------------------------------------------------------------------------------

  //step3

  step3ChangeHandler = (e) => {
    let step3 = { ...this.state.step3 };
    step3[e.target.name] = +e.target.value;
    // if(e.target.name==="antiDumpP")
    //   step3["antidump"]=0;
    // else
    //  step3["antiDumpP"]=0;

    step3.calculated = false;
    step3.total = "0";
    this.setState({ step3: step3 });
  };

  step3BackHandler = () => {
    let step2 = {
      ...this.state.step2,
      calculated: false,
      total: "0",
    };

    let step3 = {
      antiDumpP: 0,
      antidump: 0,
      total: "0",
      calculated: false,
      calculate: false,
      update: false,
      choosed: -1,
    };

    this.setState({ step2: step2, step3: step3 });
  };

  step3Calculator = () => {
    if (!this.state.step2.calculated) return;

    let step3 = { ...this.state.step3 };
    step3.calculate = true;
    this.setState({ step3: step3 });
  };

  step3Toggler = (flag) => {
    if (flag) return;

    let step3 = { ...this.state.step3 };
    if (this.state.step3.total !== "0") step3.calculate = true;
    step3.choosed = step3.choosed * -1;
    this.setState({ step3: step3 });
  };

  //---------------------------------------------------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="invoice">
        {/* ----------------------------------------------------------------------------------------------------------------------------
                    Step1 */}

        <div className="invoice__box">
          <img className="invoice__box_top" src={leaf1} alt="" />
          <img
            className="invoice__box_bot"
            onClick={this.step1Calculator}
            src={leaf2}
            alt=""
          />
          <img
            data-aos="fade-right"
            className="invoice__box_big"
            src={invoice}
            alt=""
          />
          <img className="invoice__box_i1" src={i} alt="" />
          <img className="invoice__box_i2" src={i} alt="" />
          <img
            data-aos="fade-down"
            className="invoice__box_cash"
            src={cash}
            alt=""
          />
          <img
            data-aos="fade-right"
            className="invoice__box_arr"
            src={halfArrow}
            alt=""
          />
          <div className="invoice__box_step">
            <div className="invoice__box_step_1">cif in inr</div>
            <div className="invoice__box_step_2">Step 1</div>
          </div>
          <div className="cbmCalc__box_total">
            <span className="cbmCalc__box_total-text cbmCalc__box_total-text--mod">
              CIF IN INR
            </span>{" "}
            <span className="cbmCalc__box_total-number cbmCalc__box_total-number--mod">
              {this.state.step1.total}
            </span>
          </div>
          <div
            data-aos="fade-down"
            className="invoice__box_go"
            onClick={this.step1Calculator}
          >
            GO
          </div>
          <div className="cbmCalc__head invoice__head" id="invoice__head">
            Invoice CALCULATOR
          </div>
          <div className="invoice__box_flexWrap">
            <div className="invoice__box_flex">
              <div className="lmflexer">
                <div
                  className="invoice__box_flex-head"
                  style={{ position: "relative" }}
                >
                  <img className="imp" src={imp} alt="" />
                  Currency
                </div>
                <div>
                  <select
                    onChange={(e) => this.exchangeRateHandler(e)}
                    className="invoice__box_flex-input"
                    type="number"
                  >
                    {this.state.step1.currencyOptions.map((curr) => (
                      <option selected={curr === "INR"} value={curr}>
                        {curr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="lmflexer">
                <div className="invoice__box_flex-head">Exchange Rate</div>
                <input
                  className="invoice__box_flex-input invoice__box_flex-input--ex"
                  placeholder={this.state.step1.exchangeRate}
                  disabled
                  type="number"
                />
              </div>
              <div className="lmflexer">
                <div className="invoice__box_flex-head">
                  <div>Invoice Value</div>
                  <div className="invoice__box_flex-head-2">
                    (in selected currencies)
                  </div>
                </div>
                <input
                  onChange={this.step1ChangeHandler}
                  name="invoiceValue"
                  value={this.state.step1.invoiceValue}
                  className="invoice__box_flex-input"
                  type="number"
                />
              </div>
            </div>

            <div className="invoice__box_flex invoice__box_flex--mod ">
              <svg
                onClick={() => this.step1Toggler("freightD")}
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="55"
                viewBox="0 0 58 55"
              >
                <g
                  id="Group_3232"
                  data-name="Group 3232"
                  transform="translate(-608 -497)"
                >
                  <g
                    id="Rectangle_314"
                    data-name="Rectangle 314"
                    transform="translate(608 497)"
                    fill="none"
                    stroke="#0239ff"
                    stroke-width="2"
                  >
                    <rect width="58" height="55" rx="10" stroke="none" />
                    <rect
                      x="1"
                      y="1"
                      width="56"
                      height="53"
                      rx="9"
                      fill="none"
                    />
                  </g>
                  {this.state.step1.freightD ? (
                    <path
                      id="Icon_simple-verizon"
                      data-name="Icon simple-verizon"
                      d="M26.59,5.262c4.28-3.593.023,1.654-2.821,6.51s-8.037,15.977-8.037,15.977-4.254,2.618-6.6-.63S3,14.126,3,14.126s2.093-1.986,4.035,0,5.254,6.183,5.254,6.183S22.31,8.855,26.59,5.262Z"
                      transform="translate(623.695 506.255)"
                      fill="#0045ff"
                    />
                  ) : null}
                </g>
              </svg>

              <div className="lmflexer">
                <div class="invoice__box_flex-smallHead">Freight (20%)</div>
                <input
                  disabled
                  className="invoice__box_flex-input"
                  placeholder={
                    this.state.step1.freightD
                      ? (this.state.step1.invoiceValue *
                          this.state.step1.exchangeRate *
                          20) /
                        100
                      : null
                  }
                  type="number"
                />
              </div>
              <div className="lmflexer">
                <div class="invoice__box_flex-smallHead">
                  {" "}
                  <div>Freight</div>{" "}
                  <div className="invoice__box_flex-head-2">(If Known)</div>
                </div>
                <input
                  style={
                    !this.state.step1.freightD
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                  onChange={this.step1ChangeHandler}
                  name="freight"
                  className="invoice__box_flex-input"
                  disabled={this.state.step1.freightD}
                  type="number"
                />
              </div>
              <div class="invoice__box_flex-smallHead">
                {this.state.step1.currency}
              </div>
            </div>

            <div className="invoice__box_flex invoice__box_flex--mod">
              <svg
                onClick={() => this.step1Toggler("insD")}
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="55"
                viewBox="0 0 58 55"
              >
                <g
                  id="Group_3232"
                  data-name="Group 3232"
                  transform="translate(-608 -497)"
                >
                  <g
                    id="Rectangle_314"
                    data-name="Rectangle 314"
                    transform="translate(608 497)"
                    fill="none"
                    stroke="#0239ff"
                    stroke-width="2"
                  >
                    <rect width="58" height="55" rx="10" stroke="none" />
                    <rect
                      x="1"
                      y="1"
                      width="56"
                      height="53"
                      rx="9"
                      fill="none"
                    />
                  </g>
                  {this.state.step1.insD ? (
                    <path
                      id="Icon_simple-verizon"
                      data-name="Icon simple-verizon"
                      d="M26.59,5.262c4.28-3.593.023,1.654-2.821,6.51s-8.037,15.977-8.037,15.977-4.254,2.618-6.6-.63S3,14.126,3,14.126s2.093-1.986,4.035,0,5.254,6.183,5.254,6.183S22.31,8.855,26.59,5.262Z"
                      transform="translate(623.695 506.255)"
                      fill="#0045ff"
                    />
                  ) : null}
                </g>
              </svg>
              <div className="lmflexer">
                <div class="invoice__box_flex-smallHead">Insurance (1.15%)</div>
                <input
                  disabled
                  className="invoice__box_flex-input"
                  placeholder={
                    this.state.step1.insD
                      ? (this.state.step1.invoiceValue *
                          this.state.step1.exchangeRate *
                          1.15) /
                        100
                      : null
                  }
                  type="number"
                />
              </div>
              <div className="lmflexer">
                <div class="invoice__box_flex-smallHead">
                  {" "}
                  <div>Insurance</div>{" "}
                  <div className="invoice__box_flex-head-2">(If Known)</div>
                </div>
                <input
                  style={
                    !this.state.step1.insD
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                  onChange={this.step1ChangeHandler}
                  name="ins"
                  disabled
                  className="invoice__box_flex-input"
                  disabled={this.state.step1.insD}
                  type="number"
                />
              </div>
              <div class="invoice__box_flex-smallHead">
                {this.state.step1.currency}
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------------------------------------
                    Step2 */}

        <div className="invoice__box invoice__box--duty">
          <img
            className="invoice__box_top"
            onClick={this.step2BackHandler}
            src={leaf1}
            alt=""
          />
          <img
            className="invoice__box_bot"
            onClick={this.step2Calculator}
            src={leaf2}
            alt=""
          />
          <img className="invoice__box_bot-left" src={leaf3} alt="" />
          <img
            data-aos="fade-right"
            className="invoice__box_big-duty"
            src={invoice}
            alt=""
          />
          <img className="invoice__box_i1" src={i} alt="" />
          <img className="invoice__box_i2" src={i} alt="" />
          <img
            data-aos="fade-down"
            className="invoice__box_cash invoice__box_cash--2 "
            src={cash}
            alt=""
          />
          <img
            data-aos="fade-right"
            className="invoice__box_arr"
            src={halfArrow}
            alt=""
          />
          <img
            data-aos="fade-left"
            className="invoice__box_arr-rev"
            src={halfArrowRev}
            alt=""
          />
          <div className="invoice__box_step">
            <div className="invoice__box_step_1">cif in inr</div>
            <div className="invoice__box_step_2">Step 2</div>
          </div>
          <div
            data-aos="fade-down"
            onClick={this.step2Calculator}
            className="invoice__box_go"
          >
            GO
          </div>
          <div
            data-aos="fade-down"
            onClick={this.step2BackHandler}
            className="invoice__box_back"
          >
            BACK
          </div>
          <div className="cbmCalc__head invoice__head" id="invoice__head">
            Duty CALCULATOR
          </div>
          <div className="invoice__box_quater invoice__box_quater--1">
            <div>
              <div className="invoice__box_quater-step">1</div>
              <div className="impWrap invoice__box_quater-text">
                Basic duty
                <img className="imp" src={imp} alt="" />{" "}
              </div>
            </div>
            <div>
              <input
                className="invoice__box_flex-input"
                placeholder="0"
                name="basicDuty"
                onChange={this.step2ChangeHandler}
                value={this.state.step2.basicDuty}
                type="number"
              />
              <div className="invoice__box_quater-bet">%</div>
              <input
                className="invoice__box_flex-input invoice__box_flex-input--ex"
                disabled
                value={this.state.step2.basicDutyVal}
                placeholder="0"
                type="number"
              />
              <div className="invoice__box_quater-bet">INR</div>
            </div>
          </div>

          <div className="invoice__box_quater invoice__box_quater--2">
            <div>
              <div className="invoice__box_quater-step">2</div>
              <div className="impWrap invoice__box_quater-text">
                SWS
                <img className="imp" src={imp} alt="" />{" "}
              </div>
            </div>
            <div>
              <input
                className="invoice__box_flex-input"
                placeholder="0"
                value={this.state.step2.sws}
                onChange={this.step2ChangeHandler}
                name="sws"
                type="number"
              />
              <div className="invoice__box_quater-bet">%</div>
              <input
                className="invoice__box_flex-input invoice__box_flex-input--ex"
                placeholder="0"
                disabled
                value={this.state.step2.swsVal}
                type="number"
              />
              <div className="invoice__box_quater-bet">INR</div>
            </div>
          </div>

          <div className="invoice__box_quater invoice__box_quater--3">
            <div>
              <div className="invoice__box_quater-step">3</div>
              <div className="impWrap invoice__box_quater-text">
                Additional Duty of Customs (CVD)
                <img className="imp" src={imp} alt="" />{" "}
              </div>
            </div>
            <div>
              <input
                className="invoice__box_flex-input"
                placeholder="0"
                value={this.state.step2.cvd}
                onChange={this.step2ChangeHandler}
                name="cvd"
                type="number"
              />
              <div className="invoice__box_quater-bet">%</div>
              <input
                className="invoice__box_flex-input invoice__box_flex-input--ex"
                placeholder="0"
                disabled
                value={this.state.step2.cvdVal}
                type="number"
              />
              <div className="invoice__box_quater-bet">INR</div>
            </div>
          </div>

          <div className="invoice__box_quater invoice__box_quater--4">
            <div>
              <div className="invoice__box_quater-step">4</div>
              <div className="impWrap invoice__box_quater-text">
                GST
                <img className="imp" src={imp} alt="" />{" "}
              </div>
            </div>
            <div>
              <input
                className="invoice__box_flex-input"
                placeholder="0"
                value={this.state.step2.gst}
                onChange={this.step2ChangeHandler}
                name="gst"
                type="number"
              />
              <div className="invoice__box_quater-bet">%</div>
              <input
                className="invoice__box_flex-input invoice__box_flex-input--ex"
                placeholder="0"
                disabled
                value={this.state.step2.gstVal}
                type="number"
              />
              <div className="invoice__box_quater-bet">INR</div>
            </div>
          </div>

          <div
            style={this.props.mobile ? { bottom: "15rem" } : null}
            className="cbmCalc__box_total"
          >
            <span
              style={{ marginRight: "0rem", textAlign: "center" }}
              className="cbmCalc__box_total-text"
            >
              {this.state.step1.calculated ? (
                <p style={{ fontSize: "2rem" }}>DUTIES TOTAL IN INR</p>
              ) : (
                <p style={{ fontSize: "2rem", color: "coral" }}>
                  Make sure step 1 is complete <sup>*</sup>
                </p>
              )}
            </span>
            {this.state.step1.calculated ? (
              <span className="cbmCalc__box_total-number">
                {this.state.step2.total}
              </span>
            ) : null}
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------------------------------------
                    Step3 */}

        <div className="invoice__box">
          <img
            className="invoice__box_top"
            onClick={this.step3BackHandler}
            src={leaf1}
            alt=""
          />
          <img
            className="invoice__box_bot"
            onClick={this.step3Calculator}
            src={leaf2}
            alt=""
          />
          <img className="invoice__box_bot-left" src={leaf3} alt="" />
          <img
            data-aos="fade-right"
            className="invoice__box_big-res"
            src={result}
            alt=""
          />
          <img className="invoice__box_i1" src={i} alt="" />
          <img className="invoice__box_i2" src={i} alt="" />
          <img
            data-aos="fade-down"
            className="invoice__box_cash invoice__box_cash--3 "
            src={cash2}
            alt=""
          />
          <img
            data-aos="fade-right"
            className="invoice__box_arr"
            src={halfArrow}
            alt=""
          />
          <img
            data-aos="fade-left"
            className="invoice__box_arr-rev"
            src={halfArrowRev}
            alt=""
          />
          <div className="invoice__box_step">
            <div className="invoice__box_step_1">cif in inr</div>
            <div className="invoice__box_step_2">Step 3</div>
          </div>
          <div
            data-aos="fade-down"
            onClick={this.step3Calculator}
            className="invoice__box_go"
          >
            GO
          </div>
          <div
            data-aos="fade-down"
            onClick={this.step3BackHandler}
            className="invoice__box_back"
          >
            Back
          </div>
          <div className="cbmCalc__head invoice__head" id="invoice__head">
            RESULT
          </div>

          <div
            style={{ marginTop: "6rem", marginleft: "16rem" }}
            className="invoice__box_flexWrap"
          >
            <div style={{ marginBottom: "6rem" }} className="invoice__box_flex">
              <svg
                onClick={() =>
                  this.step3Toggler(this.state.step3.choosed === -1)
                }
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="55"
                viewBox="0 0 58 55"
              >
                <g
                  id="Group_3232"
                  data-name="Group 3232"
                  transform="translate(-608 -497)"
                >
                  <g
                    id="Rectangle_314"
                    data-name="Rectangle 314"
                    transform="translate(608 497)"
                    fill="none"
                    stroke="#0239ff"
                    stroke-width="2"
                  >
                    <rect width="58" height="55" rx="10" stroke="none" />
                    <rect
                      x="1"
                      y="1"
                      width="56"
                      height="53"
                      rx="9"
                      fill="none"
                    />
                  </g>
                  {this.state.step3.choosed === -1 ? (
                    <path
                      id="Icon_simple-verizon"
                      data-name="Icon simple-verizon"
                      d="M26.59,5.262c4.28-3.593.023,1.654-2.821,6.51s-8.037,15.977-8.037,15.977-4.254,2.618-6.6-.63S3,14.126,3,14.126s2.093-1.986,4.035,0,5.254,6.183,5.254,6.183S22.31,8.855,26.59,5.262Z"
                      transform="translate(623.695 506.255)"
                      fill="#0045ff"
                    />
                  ) : null}
                </g>
              </svg>
              <div className="lmflexer">
                <div className="invoice__box_flex-head">
                  Anti Dumping {this.state.step1.currency}
                </div>
                <input
                  style={
                    this.state.step3.choosed === 1
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                  className="invoice__box_flex-input"
                  disabled={this.state.step3.choosed === 1}
                  placeholder={0}
                  value={this.state.step3.antidump}
                  name="antidump"
                  onChange={this.step3ChangeHandler}
                  type="number"
                />
              </div>
              <svg
                onClick={() =>
                  this.step3Toggler(this.state.step3.choosed === 1)
                }
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="55"
                viewBox="0 0 58 55"
              >
                <g
                  id="Group_3232"
                  data-name="Group 3232"
                  transform="translate(-608 -497)"
                >
                  <g
                    id="Rectangle_314"
                    data-name="Rectangle 314"
                    transform="translate(608 497)"
                    fill="none"
                    stroke="#0239ff"
                    stroke-width="2"
                  >
                    <rect width="58" height="55" rx="10" stroke="none" />
                    <rect
                      x="1"
                      y="1"
                      width="56"
                      height="53"
                      rx="9"
                      fill="none"
                    />
                  </g>
                  {this.state.step3.choosed === 1 ? (
                    <path
                      id="Icon_simple-verizon"
                      data-name="Icon simple-verizon"
                      d="M26.59,5.262c4.28-3.593.023,1.654-2.821,6.51s-8.037,15.977-8.037,15.977-4.254,2.618-6.6-.63S3,14.126,3,14.126s2.093-1.986,4.035,0,5.254,6.183,5.254,6.183S22.31,8.855,26.59,5.262Z"
                      transform="translate(623.695 506.255)"
                      fill="#0045ff"
                    />
                  ) : null}
                </g>
              </svg>
              <div className="lmflexer">
                <div className="invoice__box_flex-head">Anti Dumping %</div>
                <input
                  style={
                    this.state.step3.choosed === -1
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                  className="invoice__box_flex-input invoice__box_flex-input--ex"
                  disabled={this.state.step3.choosed === -1}
                  placeholder="0"
                  value={this.state.step3.antidumpP}
                  onChange={this.step3ChangeHandler}
                  name="antiDumpP"
                  type="number"
                />
              </div>
            </div>

            <div className="invoice__box_flex invoice__box_flex--gap">
              <div className="lmflexer">
                <div className="impWrap">
                  <img className="imp" src={imp} alt="" />
                  <div className="invoice__box_flex-head">Total Duties</div>
                </div>
                <input
                  className="invoice__box_flex-input invoice__box_flex-input--ex"
                  placeholder={this.state.step2.total}
                  disabled
                  type="number"
                />
              </div>
              <div className="lmflexer">
                <div className="invoice__box_flex-head">Anti Dumping INR</div>
                <input
                  className="invoice__box_flex-input invoice__box_flex-input--ex"
                  placeholder={this.state.step3.total}
                  disabled
                  type="number"
                />
              </div>
              <div className="lmflexer">
                <div className="impWrap">
                  <img className="imp" src={imp} alt="" />
                  <div className="invoice__box_flex-head">
                    <div>CIF Total</div>
                    <div className="invoice__box_flex-head-2">
                      (in selected currencies)
                    </div>
                  </div>
                </div>
                <input
                  className="invoice__box_flex-input invoice__box_flex-input--ex"
                  placeholder={this.state.step1.total}
                  disabled
                  type="number"
                />
              </div>
            </div>
            <div className="tots">
              {this.state.step2.calculated ? (
                [
                  <div className="tots__div">
                    <div
                      className="invoice__box_flex-head"
                      style={{ marginRight: "3rem" }}
                    >
                      <div style={{ fontSize: "3rem" }}>Total</div>
                      <div className="invoice__box_flex-head-2">
                        (Including Dities)
                      </div>
                    </div>
                  </div>,
                  <input
                    className="invoice__box_flex-input invoice__box_flex-input--ex"
                    disabled
                    placeholder="0"
                    value={
                      this.state.step1 && this.state.step2 && this.state.step3
                        ? this.state.step1.total +
                          this.state.step2.total +
                          this.state.step3.total
                        : null
                    }
                    type="number"
                  />,
                ]
              ) : (
                <div className="tots__div">
                  <div
                    style={{
                      marginRight: "0rem",
                      textAlign: "center",
                      width: "30rem",
                    }}
                    className="invoice__box_flex-head"
                  >
                    <div style={{ fontSize: "2rem", color: "coral" }}>
                      Make sure step 2 is complete <sub>*</sub>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="invoice__head">HOW to use cbm calculator</div>
        <div className="invoice__video">
          <img className="invoice__video" src={video} alt="" />
        </div>

        <div className="invoice__flex">
          <img src={s1} alt="" />
          <div className="invoice__flex_text">
            <div className="invoice__flex_text-1">Step 1</div>
            <div className="invoice__flex_text-2">
              Calculate the <br /> invoice value of <br /> your product
            </div>
            <div className="invoice__flex_text-3">
              <ul>
                <li>Include freight & insurance</li>
                <li>
                  If you do not know your product’s freight and insurance, the
                  government of India will add 20% and 1.5% of freight &
                  insurance accordingly on invoice value.
                </li>
                <li>
                  Get CIF (Cost, insurance, freight) value in terms of INR
                  (Indian rupees)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="invoice__flex  invoice__flex--rev">
          <div className="invoice__flex_text invoice__flex_text--rev">
            <div className="invoice__flex_text-1">Step 2</div>
            <div className="invoice__flex_text-2 invoice__flex_text-2--rev">
              Calculate the <br />
              duty of
              <br /> the product
            </div>
            <div className="invoice__flex_text-3 invoice__flex_text-3--rev">
              <ul>
                <li>
                  Enter basic duty, sws (social welfare surcharge) & additional
                  duty of customs if any in terms of percentage
                </li>
                <li>Enter GST percentage</li>
                <li>Get the total duty of the product</li>
              </ul>
            </div>
          </div>
          <img src={s1} alt="" />
        </div>

        <div className="invoice__flex invoice__flex--last">
          <img src={s1} alt="" />
          <div className="invoice__flex_text">
            <div className="invoice__flex_text-1">Step 3</div>
            <div className="invoice__flex_text-2">
              Get the cost <br />
              of your product
              <br />
              including duties
            </div>
            <div className="invoice__flex_text-3">
              <ul>
                <li>
                  If any Anti-Dumping duty, mention it in percentage or total
                  amount
                </li>
                <li>
                  Finally, get the total duty and cost of the product including
                  duties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
