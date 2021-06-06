import React, { Component } from "react";
import insure from "../../../assets/images/insure.svg";
import yellowPlane from "../../../assets/images/yellowPlane.svg";
import mob1 from "../../../assets/images/mob1.svg";
import man from "../../../assets/images/man.png";
import umbrella from "../../../assets/images/umbrella.svg";
import {Link} from "react-router-dom"

import Aos from "aos";
import "aos/dist/aos.css";

class Insurance extends Component {
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
        <div className="freight__head freight__head--ins">Insurance</div>
        <div className="freight__black">Safety First</div>

        <div className="freight__flex">
          <img src={insure} alt="" />
          <img
            data-aos="fade-right"
            id="freight__flex_plane"
            src={yellowPlane}
            alt=""
          />
          <div className="freight__flex_text ">
            <div className="freight__flex_text-l">
              Why <br />
              Insurance?
            </div>
            <div className="freight__flex_text-s">
              While stepping in international trade having insurance of your
              product is an important aspect. Your cargo can be damaged on
              exposure to a wide variety of risks, including an accident of the
              vehicle carrying the cargo, damage to the container, sinking,
              burning or piracy. These and many more factors lead to the loss of
              cargo. IndiaPort widen the scope of coverage and loss prevention{" "}
            </div>
          </div>
        </div>

        <div className="freight__flex freight__flex--rev">
          <div className="freight__flex_text freight__flex_text--left">
            <div className="freight__flex_text-l">
              Types of Marine <br />
              Cargo Insurance
            </div>
            <div className="freight__flex_text-s">
              It is vital to have insurance for your cargo as a lot of money
              goes into the goods, their packaging and transporting the
              shipment. Marine cargo insurance is a complete package designed to
              help you secure your goods. IndiaPort Marine Cargo Insurance
              policy covers loss or damage to cargo in transit by:
              <br /> Land 🚛
              <br /> Waterways 🚢
              <br /> Air ✈️
            </div>
          </div>
          <img data-aos="fade-left" src={mob1} alt="" />
        </div>

        <div className="freight__flex freight__flex--rev">
          <div className="freight__flex_text freight__flex_text--left">
            <div className="freight__flex_text-l">
              <strong>100% </strong> Trusted
              <br />
            </div>
            <div className="freight__flex_text-s"></div>
          </div>
          <img data-aos="fade-left" src={umbrella} alt="" />
        </div>

        <div className="freight__quote">
          Listed below are the types of insurance IndiaPort provides-
          <ol>
            <li>
              Open Cover- Provides insurance to all the shipments sent/ received
              within the scope of coverage. An open cover is not a policy
              therefore it is based on unstamped agreement.
            </li>
          </ol>
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

export default Insurance;
