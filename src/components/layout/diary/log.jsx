import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Log extends Component {


    GOOGLE_APP_KEY=`AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    // UDATES_BLOG_ID=`753366898998375447`;


    state={

        content:null,
    }

    componentDidMount=()=>{
       let blogId=this.props.match.params.blogId;
       let postId=this.props.match.params.postId;
       let BLOGGER_POST_API=`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${this.GOOGLE_APP_KEY}`;

       axios.get(BLOGGER_POST_API)
       .then(res=>this.setState({content:res.data}))
       .catch(err=>alert("somethin went wrong -> Log.jsx"))


    }


    render() {

        if(!this.state.content)
          return <div className="diary__blogPost--loading">
                     <h1>loading...</h1>
                </div>


        return (
            <div className="diary__blogPost">
                <td dangerouslySetInnerHTML={{__html: this.state.content.content}} />


            </div>
        )
    }
}


export default  withRouter(Log);
