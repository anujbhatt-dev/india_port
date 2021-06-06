import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"
import $ from "jquery"

import logo from "../../../assets/images/logo.png"
import navarr from "../../../assets/images/navarr.svg"

class Navigation extends Component{

    state={
      on:false
    }

    onHandler=()=>{
      this.setState({
        on:!this.state.on
      })
    }

    componentDidMount=()=>{
      $(".main").click(()=>{
        this.setState({
          on:false
        })
      })
    }

    render(){
      return (
           <div className="navigation">

               <div className="navigation__brandLogo">
                    <NavLink to="/"><img src={logo} alt=""/></NavLink>
               </div>
               <div className={this.state.on?"navigation__items navon":"navigation__items navoff"}>
                   
                   <NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                   {this.props.location.pathname==="/"||this.props.location.pathname==="/about"?<a className="navigation__items_item navigation__items_item" href="/diary">Diary</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/diary" className="navigation__items_item navigation__items_item">Diary</NavLink>}
                   {this.props.location.pathname==="/"||this.props.location.pathname==="/about"?<a className="navigation__items_item navigation__items_item" href="/CbmCalc">CBM</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/CbmCalc" className="navigation__items_item navigation__items_item">CBM</NavLink>}
                   {this.props.location.pathname==="/"||this.props.location.pathname==="/about"?<a className="navigation__items_item navigation__items_item" href="/invoice">Invoice</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/invoice" className="navigation__items_item navigation__items_item">Invoice</NavLink>}
                   {this.props.location.pathname==="/"||this.props.location.pathname==="/about"?<a className="navigation__items_item navigation__items_item" href="/about">About</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/about" className="navigation__items_item navigation__items_item">About</NavLink>}
                   {this.props.location.pathname==="/"||this.props.location.pathname==="/about"?<a className="navigation__items_item navigation__items_item" href="/contact">Contact</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/contact" className="navigation__items_item navigation__items_item">Contact</NavLink>}
                   {this.props.location.pathname==="/"||this.props.location.pathname==="/about"?<a className="navigation__items_item navigation__items_item" href="/exim">Exim</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/exim" className="navigation__items_item navigation__items_item">Exim</NavLink>}

                   <div className="dropdown ">
                         <div className="dropdown__name">Tools</div>
                         <div className="dropdown__menu">
                             {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="/frieght">Freight</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/freight" className="navigation__items_item navigation__items_item">Freight</NavLink>}
                             {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="/insurance">Insurance</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/insurance" className="navigation__items_item navigation__items_item">Insurance</NavLink>}
                             {this.props.location.pathname==="/"?<a className="navigation__items_item navigation__items_item" href="/customClearance">Custom</a>:<NavLink activeStyle={{color:"white",background:"#FFBF29"}} exact to="/customClearance" className="navigation__items_item navigation__items_item">Custom</NavLink>}
                         </div>

                   </div>
                   <div onClick={this.onHandler} className="navigation__arrow">
                   <img  src={navarr} alt=""/>
                   </div>
               </div>
           </div>
      )
    }
}

export default withRouter(Navigation);
