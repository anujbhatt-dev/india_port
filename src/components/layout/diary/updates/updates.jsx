import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import diary1 from "../../../../assets/images/diary1.png"
import diary2 from "../../../../assets/images/diary2.png"


import BlogsBootstrap from "../blogs-bootstrap";



export default class Updates extends Component {

    GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    UDATES_BLOG_ID = `2657090034952578845`;
    UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        updates: []
    }



    componentDidMount = () => {


        if(this.props.updates.length===0)
        axios.get(this.UDATES_BLOGGER_POSTS_API)
            .then(res =>
                this.setState({ updates: res.data.items })
            )
            .catch(err => alert("something went wrong-> UPdate.jsx"));
       else
        this.setState({updates:this.props.updates});

    }

    render() {
        return (
            <div className="diary__1">
                <div className="diary__1_1">
                    <img src={diary1} alt=""/>
                    <div  className="diary__1_1-text">
                        <div  className="diary__1_1-text-title">How to Start Import Export Business in India?</div>
                        <div className="diary__1_1-text-date">12 nov 2222</div>
                    </div>
                </div>
                <div className="diary__1_updates">
                        <div className="diary__1_updates-head">Updates</div>
                       {
                    this.state.updates.length === 0 ? [<Link to='/'> <span>1.</span> loading updates...</Link>,<Link to='/'> <span>2.</span> loading updates...</Link>,<Link to='/'> <span>3.</span> loading updates...</Link>,<Link to='/'> <span>4.</span> loading updates...</Link>,] :
                        this.state.updates.map((update,i) =>
                            [<Link to={`/diary/blogs/${update.blog.id}/posts/${update.id}`}><span>1</span>{update.title}</Link>,
                            <Link to={`/diary/blogs/${update.blog.id}/posts/${update.id}`}><span>2</span>{update.title}</Link>,
                            <Link to={`/diary/blogs/${update.blog.id}/posts/${update.id}`}><span>3</span>{update.title}</Link>,
                            <Link to={`/diary/blogs/${update.blog.id}/posts/${update.id}`}><span>4</span>{update.title}</Link>]
                        )}
                </div>
            </div>
        )
    }
}
