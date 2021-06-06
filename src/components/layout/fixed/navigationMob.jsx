import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import greenCall from "../../../assets/images/greenCall.svg"
import vBar from "../../../assets/images/vBar.svg"
import Backdrop from "../backdrop/backdrop"

  class NavigationMob extends Component{

     state={
       open:false
     }

     toggleHandler=()=>{
       this.setState({
         open:!this.state.open
       })
     }





    render(){

      return (
          <div className="navMob">

                <div className="navMob__toggler">
                   {this.state.open?<i onClick={this.toggleHandler} className="fa fa-times" style={{color:"white",fontSize:"4rem"}} aria-hidden="true"></i>:<i onClick={this.toggleHandler} className="fa fa-bars" aria-hidden="true"></i>}
                </div>

                <div className={this.state.open?"openNav navMob__items ":"closeNav navMob__items "}>
                    <div className="navigation__brandLogo">
                         <NavLink  style={{border:"none"}} to="/"><img src={logo} alt=""/></NavLink>
                    </div>
                    <div>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/" className="a navigation__items_item navigation__items_item">Home</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/diary" className="a navigation__items_item navigation__items_item">Diary</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/CbmCalc" className="a navigation__items_item navigation__items_item">CBM</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/invoice" className="a navigation__items_item navigation__items_item">Invoice</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/about" className="a navigation__items_item navigation__items_item">About</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/contact" className="a navigation__items_item navigation__items_item">Contact</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/exim" className="a navigation__items_item navigation__items_item">Exim</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/freight" className="a navigation__items_item navigation__items_item">Freight</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/insurance" className="a navigation__items_item navigation__items_item">Insurance</NavLink>
                      <NavLink onClick={this.toggleHandler} activeStyle={{border: "3px solid #FFBF29", color:"white",background:"#FFBF29"}} exact to="/customClearance" className="a navigation__items_item navigation__items_item">Custom</NavLink>
                    </div>
                      {this.state.open?<a style={{fontSize:"1.2rem",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}} href="tel://+918517885555" className=" navigation__items_item contact__1_text-call"><img style={{height:"1.5rem"}} className="contact__1_text-call--img1" src={greenCall} alt=""/><span>+91  8517885555</span></a>:null}
                </div>
                {this.state.open?<Backdrop show={this.state.open} clicked={this.toggleHandler}/>:null}
          </div>
      )
    }
  }


 export default NavigationMob;
