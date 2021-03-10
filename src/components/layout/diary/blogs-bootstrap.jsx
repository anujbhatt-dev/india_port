// import axios from 'axios';
// import React, { Component } from 'react'

// export default class BlogsBootstrap extends Component {
    
//     GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
//     UDATES_BLOG_ID = `2657090034952578845`;
//     UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

//     state = {
//         updates: [],
//     }

   

//     componentDidMount=()=>{

//         alert("called")
          
//         axios.get(this.UDATES_BLOGGER_POSTS_API)
//             .then(res =>
//                 this.setState({ updates: res.data.items })
//             )
//             .catch(err => alert("something went wrong-> UPdate.jsx"));

//     }


//     getUpdates=()=>{
//         return this.state.updates
//     }



//     render() {
//         return null;
//     }
// }
