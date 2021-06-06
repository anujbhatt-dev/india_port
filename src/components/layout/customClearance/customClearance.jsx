import React, { Component } from "react";
import cc from "../../../assets/images/cc.svg";
import mob1 from "../../../assets/images/mob1.svg";
import board from "../../../assets/images/board.svg";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

class CustomClearance extends Component {
  componentDidMount = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    Aos.init({
      duration: 2000,
      delay: 100,
    });
  };

  render() {
    return (
      <div className="freight">
        <div className="freight__head freight__head--ins">CUSTOM CLearance</div>
        <div className="freight__black">Get Job Done</div>

        <div className="freight__flex">
          <img src={cc} alt="" />
          <div className="freight__flex_text">
            <div className="freight__flex_text-l">
              IndiaPort & <br />
              Customs Clearance
            </div>
            <div className="freight__flex_text-s">
              Customs clearance work involves the preparation and submission of?
              documentation required to facilitate export or imports into the
              country. Customs clearance is a grind and IndiaPort makes it
              smooth for you. We provide you with a flawless digital import
              duty.{" "}
            </div>
          </div>
        </div>

        <div className="freight__flex freight__flex--rev">
          <div className="freight__flex_text freight__flex_text--left">
            <div className="freight__flex_text-l">
              Managing <br />
              Documents
            </div>
            <div className="freight__flex_text-s">
              Tired of going through many procedures and filing various
              documents? We got you! IndiaPort makes documentation hassle-free.
              With its Multiple Custom Document, IndiaPort gets all documents in
              one form to lessen your load.{" "}
            </div>
          </div>
          <img data-aos="fade-right" src={mob1} alt="" />
        </div>

        <div className="freight__flex freight__flex--rev">
          <div className="freight__flex_text freight__flex_text--left">
            <div className="freight__flex_text-l">
              Transparency
              <br />
              as <strong>CHA</strong>
            </div>
            <div className="freight__flex_text-s">
              Process of carrying tedious work of calculating duty, cbm or
              container tracking, everything is made easy. How will IndiaPort
              help during Customs?🤔 Customs examination, assessment, payment of
              duty and taking delivery of cargo from customs after clearance
              along with documents everything will be done by IndiaPort. When we
              say we got you, we do mean it.
            </div>
          </div>
          <img data-aos="fade-right" src={board} alt="" />
        </div>

        <div className="freight__quote">
          IndiaPort provides a service Multiple Custom House Agent, you can
          select a CHA according to your liking. Not just this but, you can keep
          a track of the customs clearance procedure delivered by CHA. Custom
          Clearance is not easy but, we render appropriate and secured custom
          clearance procedure with the latest development and complete knowledge
          of the trade. With IndiaPort you drastically reduce paperwork and
          related cost and waste.
        </div>
        <div className="freight__flex freight__flex--mod">
          <Link to="/contact">
            <button className="freight__flex_btn">Get Quote</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CustomClearance;
