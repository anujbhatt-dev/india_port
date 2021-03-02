import React, {Component} from "react"
import frontExim from "../../../assets/images/frontExim.svg"


class Exim extends Component{

    render(){

      return (
          <div className="exim">
               <img className="exim__img" src={frontExim} alt=""/>
               <a href="">Visit EXIM</a>
          </div>
      )
    }
}

export default Exim;
