import React, { Component } from "react";
import yellow from "../../../../assets/images/yellowArr.svg";
import pink from "../../../../assets/images/pink.svg";
import blue from "../../../../assets/images/blue.svg";
import pinkMob from "../../../../assets/images/pinkMob.svg";
import blueMob from "../../../../assets/images/blueMob.svg";
import price from "../../../../assets/images/price.svg";
import price2 from "../../../../assets/images/price2.svg";

class Landing5 extends Component {
  state = {
    right: true,
  };

  arrowHadler = () => {
    this.setState({
      right: !this.state.right,
    });
  };

  render() {
    // <img src={price} alt=""/>
    // <div className="landing6__2_text">
    //     <div className="landing6__2_text-large">EASY</div>
    //     <div className="landing6__2_text-medium">FREIGHT BOOKING</div>
    //     <div className="landing6__2_text-small">Lorem ipsum dolor sit amet.</div>
    // </div>
    console.log("landing5", this.props.mobile);

    return (
      <div className="landing5">
        <div
          className={
            this.state.right
              ? "landing5__box landing5__box--position1"
              : "landing5__box landing5__box--position2"
          }
        >
          <div className="landing5__box_imgWrap">
            <img src={this.props.mobile ? pinkMob : pink} alt="" />
          </div>
          <div className="landing5__box_imgWrap">
            <img src={this.props.mobile ? blueMob : blue} alt="" />
          </div>
        </div>
        <img
          onClick={this.arrowHadler}
          className={
            this.state.right
              ? "landing5__arr landing5__arr--right"
              : "landing5__arr landing5__arr--left"
          }
          src={yellow}
          alt=""
        />
        {this.props.mobile
          ? [
              <div className="landing5__main">
                <h1>EXIM</h1>
                <h2>FREIGHT Booking</h2>
              </div>,
              <button className="landing1__5_btn">
                <span>Search</span>
                <svg
                  id="Group_6149"
                  data-name="Group 6149"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.574"
                  height="24.595"
                  viewBox="0 0 50.574 24.595"
                >
                  <g
                    id="Group_6147"
                    data-name="Group 6147"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_19943"
                      data-name="Path 19943"
                      d="M1606.574,789.272H1556v-2.231h43.5l-7.591-7.7,2.366-2.366Z"
                      transform="translate(-1556 -776.975)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_6148"
                    data-name="Group 6148"
                    transform="translate(0 12.298)"
                  >
                    <path
                      id="Path_19944"
                      data-name="Path 19944"
                      d="M1606.574,788H1556v2.231h43.5l-7.591,7.7,2.366,2.366Z"
                      transform="translate(-1556 -788)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>,
            ]
          : null}
      </div>
    );
  }
}

export default Landing5;
