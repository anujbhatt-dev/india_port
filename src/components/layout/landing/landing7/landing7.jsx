import React, {Component} from "react"
import b1 from "../../../../assets/images/b1.svg"
import {NavLink} from "react-router-dom"

class Landing7 extends Component{

    render(){

      return (
         <div className="landing7">
             <div className="landing7__heading">
                 BLOGS
             </div>
             <div className="landing7__items">
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>
                <div className="landing7__items_card">
                    <img src={b1} alt=""/>
                    <div className="landing7__items_card-title">Lorem ipsum dolor sit.</div>
                </div>

             </div>

             <div className="landing7__btn">
                 <span>more</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="38" viewBox="0 0 18 38">
                    <path id="Polygon_7" data-name="Polygon 7" d="M16.937,1.955a3,3,0,0,1,4.126,0L32.534,12.822A3,3,0,0,1,30.471,18H7.529a3,3,0,0,1-2.063-5.178Z" transform="translate(18) rotate(90)" fill="#0239ff"/>
                 </svg>
             </div>
         </div>
      )
    }
}

export default Landing7;
