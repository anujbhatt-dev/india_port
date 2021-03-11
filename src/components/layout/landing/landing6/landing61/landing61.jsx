import React, {Component} from "react"
import colab from "../../../../../assets/images/colab.svg"
import Magnifier from "react-magnifier";

class Landing61 extends Component{


    render(){

      return (
         <div className="landing6__1">
             <Magnifier src={colab} width={this.props.mobile?200:500} mgWidth={200} mgHeight={200} zoomFactor={1.1}/>
         </div>
      )
    }
}

export default Landing61;
