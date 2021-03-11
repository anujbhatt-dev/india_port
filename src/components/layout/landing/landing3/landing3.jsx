import React, {Component} from "react"
import cc from "../../../../assets/images/cc.svg"
import freight from "../../../../assets/images/freight.svg"
import insure from "../../../../assets/images/insure.svg"

class Landing3 extends Component{

    state={
      number:0
    }

    numberHandler=(num)=>{
      this.setState({
        number:num
      })
    }

    render(){

      return (
         !this.props.mobile?<div className="landing3">
             landing3
         </div>
         :
         <div className="landing3__mob">
             <div className="landing2__mob_head">Services</div>
             <div className="landing3__mob_dots">
                 <svg onClick={()=>this.numberHandler(0)}  xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27">
                  <g id="Group_6152" data-name="Group 6152" transform="translate(-24 -1616)">
                    <ellipse id="Ellipse_347" data-name="Ellipse 347" cx="13" cy="12.5" rx="13" ry="12.5" transform="translate(24 1618)" fill={this.state.number===0?"#363636":"#676565"}/>
                    <text id="_1" data-name="1" transform="translate(37 1638)" fill="#fff" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="-5.391" y="0">1</tspan></text>
                  </g>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="1" viewBox="0 0 11 1">
                    <line id="Line_65" data-name="Line 65" x2="11" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>


                  <svg onClick={()=>this.numberHandler(1)}  xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26">
                    <g id="Group_6153" data-name="Group 6153" transform="translate(-70 -1617)">
                      <circle id="Ellipse_348" data-name="Ellipse 348" cx="11" cy="11" r="11" transform="translate(70 1620)" fill={this.state.number===1?"#363636":"#676565"}/>
                      <text id="_2" data-name="2" transform="translate(81 1638)" fill="#b4b4b4" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="-5.121" y="0">2</tspan></text>
                    </g>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="1" viewBox="0 0 11 1">
                    <line id="Line_65" data-name="Line 65" x2="11" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>


                  <svg onClick={()=>this.numberHandler(2)}  xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26">
                    <g id="Group_6154" data-name="Group 6154" transform="translate(-112 -1617)">
                      <circle id="Ellipse_349" data-name="Ellipse 349" cx="11" cy="11" r="11" transform="translate(112 1620)" fill={this.state.number===2?"#363636":"#676565"}/>
                      <text id="_3" data-name="3" transform="translate(123 1638)" fill="#b4b4b4" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="-5.121" y="0">3</tspan></text>
                    </g>
                  </svg>
             </div>
             <div className="landing3__mob_main">
                  <img src={this.state.number===0?cc:this.state.number===1?freight:insure} alt=""/>
                  <div className="landing3__mob_main-name">
                    {
                      this.state.number===0?
                      <div>Custom<br/>
                      Clearance
                      </div>
                      :
                      this.state.number===1?
                        <div>Freight<br/>
                        Forwarding
                        </div>
                        :
                        <div>Insurance<br/>
                        for Product
                        </div>

                    }
                  </div>
             </div>
         </div>
      )
    }
}

export default Landing3;
