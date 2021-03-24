import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"
import logo from "../../../assets/images/logo.png"


class Navigation extends Component{

    render(){
      return (
           <div className="navigation">

               <div className="navigation__brandLogo">
                    <NavLink to="/"><img src={logo} alt=""/></NavLink>
               </div>
               <div className="navigation__items">
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/diary">Diary</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/diary" className="navigation__items_item navigation__items_item">Diary</NavLink>}
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/CbmCalc">CBM</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/CbmCalc" className="navigation__items_item navigation__items_item">CBM</NavLink>}
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/invoice">Invoice</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/invoice" className="navigation__items_item navigation__items_item">Invoice</NavLink>}
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/services">Service</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/services" className="navigation__items_item navigation__items_item">Services</NavLink>}
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/about">About</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/about" className="navigation__items_item navigation__items_item">About</NavLink>}
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/contact">Contact</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/contact" className="navigation__items_item navigation__items_item">Contact</NavLink>}
                   {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/exim">Exim</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/exim" className="navigation__items_item navigation__items_item">Exim</NavLink>}

                   <div className="dropdown ">
                         <div className="dropdown__name">Tools</div>
                         <div className="dropdown__menu">
                             {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/frieght"></a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/freight" className="navigation__items_item navigation__items_item">Freight</NavLink>}
                             {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/insurance"></a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/insurance" className="navigation__items_item navigation__items_item">Insurance</NavLink>}
                             {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="http://localhost:3000/customClearance"></a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/customClearance" className="navigation__items_item navigation__items_item">Custom</NavLink>}
                         </div>
                   </div>
               </div>
           </div>
      )
    }
}

export default withRouter(Navigation);
