import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Navigation extends Component{

    render(){

       //push

      return (
           <div className="navigation">

               <div className="navigation__brandLogo">
                    <img src="{logo}" alt=""/>
               </div>
               <div className="navigation__items">
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/diary" className="navigation__items_item navigation__items_item">DIARY</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/freight" className="navigation__items_item navigation__items_item">Freight</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/insurance" className="navigation__items_item navigation__items_item">Insurance</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/CbmCalc" className="navigation__items_item navigation__items_item">CBM</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/customClearance" className="navigation__items_item navigation__items_item">Custom</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/invoice" className="navigation__items_item navigation__items_item">Invoice</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/services" className="navigation__items_item navigation__items_item">Services</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/tool" className="navigation__items_item navigation__items_item">Tool</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/about" className="navigation__items_item navigation__items_item">About</NavLink>
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/contact" className="navigation__items_item navigation__items_item">Reach</NavLink>
               </div>
           </div>
      )
    }
}

export default Navigation;
