import React, {Component} from "react"
import join from "../../../../assets/images/join.svg"
import join2 from "../../../../assets/images/join2.svg"


class Landing8 extends Component{

    render(){

      return (
         <div className="landing8">
             <img src={this.props.mobile?join:join2} alt=""/>
             <div className="landing8__text">
                <div className="landing8__text_large">
                    INDIA  LEADING
                    <br/>DIGITAL  FREIGHT
                    <br/>SERVICE
                </div>
                <div className="landing8__text_small">
                    WANT PROFITS?
                </div>
                <button className="landing8__text_btn">
                     Join Us
                </button>
             </div>
         </div>
      )
    }
}

export default Landing8;
