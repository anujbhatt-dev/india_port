import React, {Component} from "react"
import $ from "jquery"
import Landing1 from "./landing1/landing1"
import Landing2 from "./landing2/landing2"
import Landing3 from "./landing3/landing3"
import Landing4 from "./landing4/landing4"
import Landing5 from "./landing5/landing5"
import Landing6 from "./landing6/landing6"
import Landing7 from "./landing7/landing7"
import Landing8 from "./landing8/landing8"
import Landing9 from "./landing9/landing9"



class Landing extends Component{

  componentDidMount=()=>{

    window.scrollTo({
        top:0,
        behavior:"auto"
      })
  }

    render(){

      return (
          <div className="landing">
               <Landing1   mobile={this.props.mobile}/>
               <Landing2  isMobile={this.props.isMobile}/>
               <Landing3  isMobile={this.props.isMobile}/>
               <Landing4 isMobile={this.props.isMobile}/>
               <Landing5  mobile={this.props.mobile}/>
               <Landing6  mobile={this.props.mobile}/>
               <Landing7  {...this.props}/>
               <Landing8  {...this.props.mobile}/>
          </div>
      )
    }
}


    export default Landing;
