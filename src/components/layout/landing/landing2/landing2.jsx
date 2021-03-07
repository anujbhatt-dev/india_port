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
      window.addEventListener("scroll",()=>{
        console.log(window.pageYOffset);
        let y = window.pageYOffset;
        if(y>=970 && y<1370){
          let lastScrollTop = 0;
          $(window).scroll(function(event){
             let st = $(this).scrollTop();
             if (st > lastScrollTop){
                 // downscroll code
                 $(".landing2__flexWrapper").css("position","fixed");
             } else {
                // upscroll code
                $(".landing2__flexWrapper").css("position","static");
             }
             lastScrollTop = st;
          });
          this.setState({
            number:0
          })
        }else if(y>=1370 && y<1770){
          this.setState({
            number:1
          })
        }else if(y>=1770 && y<2370){
          let lastScrollTop = 0;
          $(window).scroll(function(event){
             let st = $(this).scrollTop();
             if ((st > lastScrollTop) && (y>2360)){
                 // downscroll code
                 $(".landing2__flexWrapper").css("position","static");
             } else {
                // upscroll code
                $(".landing2__flexWrapper").css("position","fixed");
             }
             lastScrollTop = st;
          });
          this.setState({
            number:2
          })
        }else{
          $(".landing2__flexWrapper").css("position","static");
        }
      })

    }

    render(){

      return (
         <div className="landing2">
            <div className="landing2__flexWrapper slide_up">
               <div className="landing2__flex">
                   <div className={(this.state.number===0)?"landing2__flex_text slide_down":(this.state.number===1)?"landing2__flex_text slide_down1":"landing2__flex_text slide_down2"}>
                       <div className="landing2__flex_text-l">{this.state.number===0?"Duty":this.state.number===1?"Invoice":"BGM"}<br/>Calculator</div>
                       <div className="landing2__flex_text-s">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                   </div>
                   <img className={this.state.number===0?"slide_up":this.state.number===1?"slide_up1":"slide_up2"} src={this.state.number===0?mob1:this.state.number===1?mob2:mob1} alt=""/>
               </div>
               <img className={this.state.number===0?" img dissolve":this.state.number===1?"img dissolve1":"img dissolve2"} src={this.state.number===0?boat1:this.state.number===1?boat2:boat3} alt=""/>
             </div>

         </div>      )
    }
}

export default Landing2;
