import React, {Component} from "react"
import logo2 from "../../../assets/images/logo2.png"

class Loader extends Component{

    render(){

      return (
          <div className="loader">
              <img src={logo2} alt=""/>
              <div className="loader__title">Loading...</div>
          </div>
      )
    }
}

export default Loader;
