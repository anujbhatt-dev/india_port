import React, { Component } from "react";
import eximPic from "../../../assets/images/eximPic.png";
import freight from "../../../assets/images/freight.svg";
import plane from "../../../assets/images/plane.svg";
import mob1 from "../../../assets/images/mob1.svg";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

class Freight extends Component {
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
        <div className="freight__blue">digital</div>
        <div className="freight__head">Freight forwarding</div>
        <div className="freight__black">Get Job Done</div>

        <div className="freight__flex">
          <img src={freight} alt="" />
          <img
            data-aos="fade-right"
            id="freight__flex_plane"
            src={plane}
            alt=""
          />
          <div className="freight__flex_text">
            <div className="freight__flex_text-l">
              Cost efficiency <br />
              and time saver
            </div>
            <div className="freight__flex_text-s">
              IndiaPort transforms global freight forwarding by digitizing
              process, it is a platform that keeps traders at the heart of
              everything. We provide generous transportation comparison
              according to your cost-efficiency and simplify booking, helping
              you to save your time and cost efficiency so you can concentrate
              on your core business and ease your logistics negotiation{" "}
            </div>
          </div>
        </div>

        <div className="freight__flex freight__flex--rev">
          <div className="freight__flex_text freight__flex_text--left">
            <div className="freight__flex_text-l">
              Transparency <br />
              in rates
            </div>
            <div className="freight__flex_text-s">
              We treat every trader alike. Massive trader or the fresh one you
              don't have to fret. Laying all the services directly by shipping
              lines and no more markups of agents as IndiaPort charges fix fees
              to smoothen your trade and grants transparency in rate and
              service.{" "}
            </div>
          </div>
          <img data-aos="fade-left" src={mob1} alt="" />
        </div>

        <div className="freight__flex freight__flex--mod2">
          <div className="freight__exim_text">
            <strong>Exim</strong>
            <span>Education</span>
          </div>
          <img className="freight__exim_img" src={eximPic} alt="" />
        </div>

        <div className="freight__quote">
          As a digital freight forwarder, we make sure
          <br /> to keep your import and export shipment flowing
          <br /> with our technology and data
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

export default Freight;
