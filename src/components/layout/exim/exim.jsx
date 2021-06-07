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

      // <img className="exim__img" src={this.props.mobile?fem:frontExim} alt=""/>
      return (
          <div className="exim">
                <iframe src="https://www.eximeducation.com/" title="W3Schools Free Online Web Tutorials"></iframe>
               <a rel="noreferrer" target="_blank" href="https://eximeducation.com/">Visit EXIM</a>
          </div>
      )
    }
}

export default Exim;
