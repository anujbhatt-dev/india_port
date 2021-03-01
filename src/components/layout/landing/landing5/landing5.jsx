import React, {Component} from "react"
import yellow from "../../../../assets/images/yellowArr.svg"
import pink from "../../../../assets/images/pink.svg"
import blue from "../../../../assets/images/blue.svg"
import price from "../../../../assets/images/price.svg"
import price2 from "../../../../assets/images/price2.svg"


class Landing5 extends Component{

    state={
      right:true
    }

    arrowHadler=()=>{
      this.setState({
        right:!this.state.right
      })
    }

    render(){

      // <img src={price} alt=""/>
      // <div className="landing6__2_text">
      //     <div className="landing6__2_text-large">EASY</div>
      //     <div className="landing6__2_text-medium">FREIGHT BOOKING</div>
      //     <div className="landing6__2_text-small">Lorem ipsum dolor sit amet.</div>
      // </div>

      return (
         <div className="landing5">
            <div className={this.state.right?"landing5__box landing5__box--position1":"landing5__box landing5__box--position2"}>
               <img src={pink} alt=""/>
               <img src={blue} alt=""/>
            </div>
            <img onClick={this.arrowHadler} className={this.state.right?"landing5__arr landing5__arr--right":"landing5__arr landing5__arr--left"} src={yellow} alt=""/>
         </div>
      )
    }
}

export default Landing5;
