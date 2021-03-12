import React, {Component} from "react"
import $ from 'jquery'
import mob1 from "../../../../assets/images/mob1.svg"
import mob2 from "../../../../assets/images/mob2.svg"
import boat1 from "../../../../assets/images/boat1.svg"
import boat2 from "../../../../assets/images/boat2.svg"
import boat3 from "../../../../assets/images/boat3.svg"



class Landing2 extends Component{

    state={
      number:0
    }

    componentDidMount=()=>{
        window.addEventListener("scroll",(e)=>{
           console.log(window.pageYOffset);
        })

    }

    numberHandler=(num)=>{
      this.setState({
        number:num
      })
    }

    render(){

      return (
         !this.props.mobile?<div className="landing2">
            <div className="landing2__flexWrapper slide_up">
               <div className="landing2__flex">
                   <div className={(this.state.number===0)?"landing2__flex_text slide_down":(this.state.number===1)?"landing2__flex_text slide_down1":"landing2__flex_text slide_down2"}>
                       <div className="landing2__flex_text-l">{this.state.number===0?"Duty":this.state.number===1?"Invoice":"BGM"}<br/>Calculator</div>
                       <div className="landing2__flex_text-s">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                   </div>
                   <img className={this.state.number===0?"slide_up":this.state.number===1?"slide_up1":"slide_up2"} src={this.state.number===0?mob1:this.state.number===1?mob2:mob1} alt=""/>
               </div>
               <img className={this.state.number===0?"img dissolve":this.state.number===1?"img dissolve1":"img dissolve2"} src={this.state.number===0?boat1:this.state.number===1?boat2:boat3} alt=""/>
             </div>

         </div>
         :
         <div className="landing2__mob">
               <div className="landing2__mob_head">Tools</div>
              <div className="landing2__mob_dots">

                  <svg onClick={()=>this.numberHandler(0)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="7.5" cy="7.5" r="7.5" stroke="#0239ff" fill={this.state.number===0?"#0239ff":"white"}/>
                  </svg>

                  <svg onClick={()=>this.numberHandler(1)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="7.5" cy="7.5" r="7.5" stroke="#0239ff" fill={this.state.number===1?"#0239ff":"white"}/>
                  </svg>

                  <svg onClick={()=>this.numberHandler(2)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="7.5" cy="7.5" r="7.5" stroke="#0239ff" fill={this.state.number===2?"#0239ff":"white"}/>
                  </svg>

              </div>
              <div className="landing2__mob_main">
                   <img  src={this.state.number===0?mob1:this.state.number===1?mob2:mob1} alt=""/>
                   <div className="landing2__mob_main-name">
                       {this.state.number===0?"mob1":this.state.number===1?"mob2":"mob1"} Calculator
                   </div>
              </div>
         </div>

      )
    }
}

export default Landing2;
