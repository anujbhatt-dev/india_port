import React, {Component} from "react"
import arrow from "../../../assets/images/right-drawn-arrow.svg"

class GoTOTop extends Component{

  state={
    display:"none"
  }

 componentDidMount=()=>{
    window.addEventListener('scroll',()=>{
     if(window.pageYOffset>=1000){
       this.setState({
         display:"flex"
       })
     }else{
       this.setState({
         display:"none"
       })
     }
   })
 }

 goToTop=()=>{
   window.scrollTo({top:0,behavior:"smooth"})
 }

  render(){

    return (
        <div onClick={this.goToTop} style={{display:this.state.display}} className="goToTop"><img className="renderAnimation2 doubleArrow" src={arrow} alt=""/></div>
    )
  }
}


export default GoTOTop;
