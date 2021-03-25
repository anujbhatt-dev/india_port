import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
 
class Try extends Component {
  render() {
    const child   = { width: `130em`, height: `100%`}
    const parent  = { width: `160em`, height: `100%`}
    return (
      <div style={parent}  className="landing1">
        <h1>HRLLO</h1>
        <HorizontalScroll
        
        pageLock      = { true }
        reverseScroll = { true }
        style         = {{color:"blue",width: `50%`, height: `50%`}}
        config        = {{ stiffness: 1, damping: 1 }}
        className     = { "none" }
        animValues    = { 2 }
        >
            <div style={child}>123</div>
            <div style={child}>123</div>
            <div style={child}>123</div>
        </HorizontalScroll>
      </div>
    )
  }
}

export default Try