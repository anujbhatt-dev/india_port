import React, {Component} from "react"
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

    render(){

      return (
          <div classname="landing">
               <Landing1 mobile={this.props.mobile}/>
               <Landing2 mobile={this.props.mobile}/>
               <Landing3 mobile={this.props.mobile}/>
               <Landing4 mobile={this.props.mobile}/>
               <Landing5 mobile={this.props.mobile}/>
               <Landing6 mobile={this.props.mobile}/>
               <Landing7 mobile={this.props.mobile}/>
               <Landing8 mobile={this.props.mobile}/>
          </div>
      )
    }
}


    export default Landing;
