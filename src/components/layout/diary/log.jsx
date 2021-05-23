import axios from 'axios';
import {Link} from "react-router-dom"
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Log extends Component {


    GOOGLE_APP_KEY=`AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    // UDATES_BLOG_ID=`753366898998375447`;


    state={

        content:null,
    }

    componentDidMount=()=>{

        window.scrollTo({
            top:0,
            behavior:"auto"
          })


          let id=this.props.match.params.id+"";

       let blogId=id.substring(0,id.indexOf('_'));
       let postId=id.substring(id.indexOf('_')+1);
       let BLOGGER_POST_API=`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${this.GOOGLE_APP_KEY}`;

       axios.get(BLOGGER_POST_API)
       .then(res=>this.setState({content:res.data}))
       .catch(err=>alert("somethin went wrong reload the page."))


    }


    render() {

        if(!this.state.content)
          return <div className="diary__blogPost--loading">
                     <h1>loading...</h1>
                </div>


        return (
            <div className="diary__blogPost">
                <td dangerouslySetInnerHTML={{__html: this.state.content.content}} />
                <Link className="diary__blogPost_link" to="/diary">&larr; Back to Diary</Link>

            </div>
        )
    }
}


export default  withRouter(Log);
