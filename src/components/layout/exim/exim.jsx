import React, {Component} from "react"
import frontExim from "../../../assets/images/frontExim.svg"
import fem from "../../../assets/images/fem.svg"

class Exim extends Component{

  componentDidMount=()=>{
    window.scrollTo({
        top:0,
        behavior:"auto"
      })
  }

    render(){

      return (
          <div className="exim">
               <img className="exim__img" src={this.props.mobile?fem:frontExim} alt=""/>
               <a href="">Visit EXIM</a>
          </div>
      )
    }
}

export default Exim;
