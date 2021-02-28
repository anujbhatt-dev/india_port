import React, {Component} from "react"
import $ from "jquery"
// import serviceBack from "../../../assets/images/serviceBack.png"

class Services extends Component{


    componentDidMount=()=>{
      $(".navigation").css("background-color", "transparent");
      $(".navigation").css("position", "fixed");
      $(".navigation").css("margin", "0 10vw");

    }

    componentWillUnmount=()=>{
      $(".navigation").css("background-color", "white");
      $(".navigation").css("position", "static");
      $(".navigation").css("margin", "0 10vw");
    }

    render(){
      // <img className="services__imgW_imgBack" src={serviceBack} alt=""/>

      return (
         <div className="services">
             <div className="services__imgW">
             </div>
             <div className="services__zIn">
                <div className="services__zIn_blue">digital</div>
                <div className="services__zIn_brand">India<br/>Port</div>
                <div className="services__zIn_head"><strong>INDIA PORT</strong>SERVICES</div>
                <div className="services__zIn_flex">
                    <div className="services__zIn_flex-card services__zIn_flex-card--side">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="1" viewBox="0 0 190 1">
                            <line id="Line_67" data-name="Line 67" x2="190" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </svg>
                        <div>custom housing agent</div>
                    </div>
                    <div className="services__zIn_flex-card services__zIn_flex-card--mid">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="1" viewBox="0 0 190 1">
                            <line id="Line_67" data-name="Line 67" x2="190" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </svg>
                        <div>digital freight renting</div>
                    </div>
                    <div className="services__zIn_flex-card services__zIn_flex-card--side">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="1" viewBox="0 0 190 1">
                            <line id="Line_67" data-name="Line 67" x2="190" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                        </svg>
                        <div>customised insurance</div>
                    </div>
                </div>
             </div>
             <div className="services__zIn_head"><strong>INDIA PORT</strong> TOOLS</div>
         </div>
      )
    }
}

export default Services;
