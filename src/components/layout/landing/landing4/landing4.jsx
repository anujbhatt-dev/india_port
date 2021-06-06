import React, { Component } from "react";
import triangle from "../../../../assets/images/triangle.svg";
import circle from "../../../../assets/images/bigCircle.svg";
import smallTruck from "../../../../assets/images/smallTruck.svg";
import smallShip from "../../../../assets/images/smallShip.svg";
import yellowPlane from "../../../../assets/images/yellowPlane.svg";
import hole from "../../../../assets/images/hole.svg";

import gsap from "gsap";
import ScrollMagic from "scrollmagic";
import { TimelineMax } from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";
import { TweenMax } from "gsap/gsap-core";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Landing4 extends Component {
  state = {
    coveredOnce: false,
  };

  level = 1;

  animationFunc = () => {
    let stopScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener("scroll", stopScroll, { passive: false });

    let onscrollFunc = () => {
      if (this.level === 1) {
          this.level = -1;

          let timeline1 = gsap.timeline();
          timeline1
            .to(".landing4__hole", 0.7, {
              css: {
                scaleX: this.props.isMobile() ? 200 : 100,
                scaleY: this.props.isMobile() ? 200 : 100,
              },
              ease: Power3.linear,
            })
            .eventCallback("onComplete", () => {
              this.level = 2;
            });
        
      } else if (this.level === 2) {
          this.level = -1;
          let timeline1 = gsap.timeline();
          timeline1
            //  scroll 1
            .to(".landing4__smallShip", 2, {
              y: "300%",
              x: "-50%",
              zIndex: "1000",
              ease: Power3.linear,
            })
            .to(
              ".landing4__yellowPlane",
              2,
              {
                y: "-100%",
                x: "-100%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".landing4__smallTruck",
              2,
              {
                x: "100%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".c1",
              2,
              {
                y: "-100%",
                // opacity:0,
                ease: Power3.linear,
              },
              "=-2",
            )
            .fromTo(
              ".c2",
              2,
              {
                y: "200%",

                ease: Power3.linear,
              },
              {
                y: "-100%",
                opacity: 1,
              },
              "=-2",
            )

            //scroll 2
            .to(".landing4__smallShip", 2, {
              y: "700%",
              ease: Power3.linear,
            })
            .to(
              ".landing4__yellowPlane",
              2,
              {
                y: "-70",
                x: "-300%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".landing4__smallTruck",
              2,
              {
                y: "-100%",
                x: "200%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".c2",
              2,
              {
                y: "-200%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .fromTo(
              ".c3",
              2,
              {
                y: "0",
                // opacity:1,
                ease: Power3.linear,
              },
              {
                y: "-200%",
                opacity: 1,
              },
              "=-2",
            )
            //

            //scroll 3
            .to(".landing4__smallShip", 2, {
              y: this.props.isMobile() ? "400%" : "450%",
              x: this.props.isMobile() ? "90%" : "100%",
              ease: Power3.linear,
            })
            .to(
              ".landing4__yellowPlane",
              2,
              {
                y: this.props.isMobile() ? "100%" : "150%",
                x: this.props.isMobile() ? "-300%" : "-400%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".landing4__smallTruck",
              2,
              {
                y: this.props.isMobile() ? "-130" : "-300%",
                x: "200%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".c3",
              2,
              {
                y: "-300%",
                ease: Power3.linear,
              },
              "=-2",
            )
            .to(
              ".landing4__text_primary",
              2,
              {
                opacity: 0,
                ease: Power3.linear,
              },
              "=-2",
            )
            .eventCallback("onComplete", () => {
              this.level = 3;
            });
       
      } else if (this.level === 3) {
          this.level = -1;
          let timeline1 = gsap.timeline();

          timeline1
            .to(".landing4__hole", 0.7, {
              css: {
                scaleX: this.props.isMobile() ? 10 : 3,
                scaleY: this.props.isMobile() ? 10 : 3,
              },
              ease: Power3.linear,
            })
            .eventCallback("onComplete", () => {
              this.level = 4;
            });
       
      } else if (this.level === 4) {
          window.removeEventListener("scroll", onscrollFunc);
          window.removeEventListener("scroll", onscrollFunc);
          window.removeEventListener("scroll", stopScroll);
          window.addEventListener(
            "scroll",
            (e) => {
              e.preventDefault();
            },
            true,
          );
        
      }
    };
    window.addEventListener("scroll", onscrollFunc);
    // if (this.props.isMobile()) window.addEventListener("scroll", onscrollFunc);
  };

  animationAfterCoveredOnce = (flag) => {
    let timeline1 = gsap.timeline();

    timeline1.to(".landing4__hole", 0.7, {
      css: {
        scaleX: this.props.isMobile()
          ? flag == 1
            ? 200
            : 10
          : flag == 1
          ? 100
          : 3,
        scaleY: this.props.isMobile()
          ? flag == 1
            ? 200
            : 10
          : flag == 1
          ? 100
          : 3,
      },
      ease: Power3.linear,
    });
  };

  componentDidMount = () => {
      let controller = new ScrollMagic.Controller();
      let timeline = gsap.timeline();

      let scene = new ScrollMagic.Scene({
        triggerElement: "#landing4",
        duration: "100%",
        triggerHook: 0,
        offset: "0",
      });

      scene
        .setTween(timeline)
        //  .setTween(TweenMax.
        .setPin("#landing4")
        .addTo(controller);

      timeline
        .to(".ship", 2, {
          x: 10,
        })
        .eventCallback("onStart", () =>
          this.state.coveredOnce
            ? this.animationAfterCoveredOnce(1)
            : this.animationFunc(),
        )
        .eventCallback(
          "onReverseComplete",
          () =>
            this.state.coveredOnce
              ? this.animationAfterCoveredOnce(-1)
              : this.setState({ coveredOnce: true }),
         );

  };

  render() {
    return (
      <div id="landing4" className="landing4">
        {/* {this.props.isMobile()?null: */}

        <img className="landing4__hole" src={hole} alt="" />
        {/* } */}
        <div className="landing4__text">
          <div className="landing4__text_primary">
          IndiaPorts goal is to improve
                    </div>
          <div style={{ overflow: "hidden" }}>
            <div
              style={{ color: "#0076FF" }}
              className="landing4__text_secondary c1"
            >
              Transparency
            </div>
            <div
              style={{ color: "#C000FA", opacity: 0 }}
              className="landing4__text_secondary c2"
            >
              Freight
            </div>
            <div
              style={{ color: "#0027FF", opacity: 0 }}
              className="landing4__text_secondary c3"
            >
              Insurance 
            </div>
          </div>
        </div>
        <img className="landing4__circle" src={circle} alt="" />
        <img className="landing4__smallShip" src={smallShip} alt="" />
        <img
          className="landing4__smallShip ship"
          style={{ opacity: 0 }}
          src={smallShip}
          alt=""
        />
        <img className="landing4__smallTruck" src={smallTruck} alt="" />
        <img className="landing4__yellowPlane" src={yellowPlane} alt="" />
      </div>
    );
  }
}

export default Landing4;
