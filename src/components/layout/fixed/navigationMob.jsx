import React, {Component} from "react"
import {NavLink} from "react-router-dom"


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
                   {this.state.open?<i onClick={this.toggleHandler} className="fa fa-times" aria-hidden="true"></i>:<i onClick={this.toggleHandler} className="fa fa-bars" aria-hidden="true"></i>}
                </div>

                <div className={this.state.open?"openNav navMob__items ":"closeNav navMob__items "}>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/diary" className="navigation__items_item navigation__items_item">Diary</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/CbmCalc" className="navigation__items_item navigation__items_item">CBM</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/invoice" className="navigation__items_item navigation__items_item">Invoice</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/services" className="navigation__items_item navigation__items_item">Services</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/about" className="navigation__items_item navigation__items_item">About</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/contact" className="navigation__items_item navigation__items_item">Contact</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/exim" className="navigation__items_item navigation__items_item">Exim</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/freight" className="navigation__items_item navigation__items_item">Freight</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/insurance" className="navigation__items_item navigation__items_item">Insurance</NavLink>
                    <NavLink onClick={this.toggleHandler} activeStyle={{color:"white",background:"#FFBF29"}} exact to="/customClearance" className="navigation__items_item navigation__items_item">Custom</NavLink>
                </div>
          </div>
      )
    }
  }


 export default NavigationMob;
