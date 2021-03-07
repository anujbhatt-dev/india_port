import React, {Component} from "react"
import {Switch , Route} from "react-router-dom"
//fixed
import GoToTop from "./fixed/gototop"
import Navigation from "./fixed/navigation"
import NavigationMob from "./fixed/navigationMob"


import Landing from "./landing/landing"
import About from "./about/about"
import Contact from "./contact/contact"
import Freight from "./freight/freight"
import Insurance from "./insurance/insurance"
import CustomClearance from "./customClearance/customClearance"
import Invoice from "./invoice/invoice"
import CbmCalc from "./cbmCalc/cbmCalc"

import Exim from "./exim/exim"
import Diary from "./diary/diary"
import Log from "./diary/log"
import BlogsBootstrap from "./diary/blogs-bootstrap"
import Updates from "./diary/updates/updates"
import axios from "axios"

class Layout extends Component{

    // state={
    
    // }

    GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    UDATES_BLOG_ID = `2657090034952578845`;
    UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`
    NEWS_BLOG_ID = `9075147176992920351`;
    NEWS_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.NEWS_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`
    BLOGS_BLOG_ID = `188050538809435730`;
    BLOGS_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.BLOGS_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        updates: [],
        mobile:false,
        news: [],
        blogs:[],
    }


    componentDidMount=()=>{

      let width= Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if(width<=500){
        this.setState({
          mobile:true
        })
      }
     
      //getting updates
      axios.get(this.UDATES_BLOGGER_POSTS_API)
      .then(res =>
          this.setState({ updates: [...res.data.items] })
      )
      .catch(err => alert("something went wrong-> UPdate.jsx"));
      axios.get(this.NEWS_BLOGGER_POSTS_API)
      .then(res =>
          // console.log(res.data)
          this.setState({ news: res.data.items })
      )
      .catch(err => alert("something went wrong-> News.jsx"));
      axios.get(this.BLOGS_BLOGGER_POSTS_API)
      .then(res =>
          // console.log(res.data)
          this.setState({ blogs: res.data.items })
      )
      .catch(err => alert("something went wrong-> Blogs.jsx"));

    }


    render(){

      return (
          <div className="layout">
              {this.state.mobile?<NavigationMob/>:<Navigation/>}
              <GoToTop/>
              <Switch>
                   <Route path='/' exact>
                       <Landing/>
                   </Route>
                   <Route path='/about' exact>
                       <About/>
                   </Route>
                   <Route path='/contact' exact>
                       <Contact/>
                   </Route>
                   <Route path='/freight' exact>
                       <Freight/>
                   </Route>
                   <Route path='/insurance' exact>
                       <Insurance/>
                   </Route>
                   <Route path='/customClearance' exact>
                       <CustomClearance/>
                   </Route>
                   <Route path='/invoice' exact>
                       <Invoice/>
                   </Route>
                   <Route path='/cbmCalc' exact>
                       <CbmCalc/>
                   </Route>
                   <Route path='/exim' exact>
                       <Exim/>
                  </Route>
                   <Route path='/diary' exact>
                       <Diary {... this.state}/>
                   </Route>
                   <Route path='/diary/blogs/:blogId/posts/:postId' exact>
                       <Log/>
                   </Route>

              </Switch>
             
          </div>
      )
    }
}


 export default Layout;
