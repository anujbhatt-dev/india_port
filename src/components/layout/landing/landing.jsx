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

  state={

  }
  componentDidMount=()=>{
    let newState={
    landing1:$('.landing1').offset().top,
    landing2:$('.landing2').offset().top,
    landing3:$('.landing3').offset().top,
    landing4:$('.landing4').offset().top,
    landing5:$('.landing5').offset().top,
    landing6:$('.landing6').offset().top,
    landing7:$('.landing7').offset().top,
    landing8:$('.landing8').offset().top
  }
   console.log(newState);
   this.setState({
     ...newState
   })

    window.scrollTo({
        top:0,
        behavior:"auto"
      })
  }

    render(){

      return (
          <div className="landing">
               <Landing1 {...this.state} mobile={this.props.mobile}/>
               <Landing2 {...this.state} mobile={this.props.mobile}/>
               <Landing3 {...this.state} mobile={this.props.mobile}/>
               {/* <Landing3_1 />
               <Landing3_2 /> */}
               <Landing4 {...this.state} mobile={this.props.mobile}/>
               <Landing5 {...this.state} mobile={this.props.mobile}/>
               <Landing6 {...this.state} mobile={this.props.mobile}/>
               <Landing7 {...this.state} mobile={this.props.mobile} {...this.props}/>
               <Landing8 {...this.state} mobile={this.props.mobile}/>
          </div>
      )
    }
}


    export default Landing;
