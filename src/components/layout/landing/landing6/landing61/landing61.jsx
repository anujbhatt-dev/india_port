import React, {Component} from "react"
import $ from "jquery"
import colab from "../../../../../assets/images/colab.png"
import Magnifier from "react-magnifier";

class Landing61 extends Component{

    componentDidMount=()=>{
          $(".landing6__1").mousemove((e)=>{
           let x = e.pageX - $('.landing6__1_imgOver').offset().left;
           let y = e.pageY - $('.landing6__1_imgOver').offset().top;
            $(".landing6__1_imgOver").css("background",`radial-gradient(circle at ${x}px ${y}px, transparent 20%, white 20%)`)
         })
         $(".landing6__1").mouseleave((e)=>{
          let x = e.pageX - $('.landing6__1_imgOver').offset().left;
          let y = e.pageY - $('.landing6__1_imgOver').offset().top;
           $(".landing6__1_imgOver").css("background",`radial-gradient(circle at center, transparent 20%, white 20%)`)
        })
    }


    render(){

      return (
         <div className="landing6__1">
             <img src={colab} alt=""/>
             {this.props.mobile?null:<div className="landing6__1_imgOver">.</div>}
         </div>
      )
    }
}

export default Landing61;
