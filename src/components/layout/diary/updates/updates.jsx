import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogsBootstrap from "../blogs-bootstrap";

export default class Updates extends Component {

    GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    UDATES_BLOG_ID = `2657090034952578845`;
    UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        updates: [],
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
            <div>
                <h1>UPDATES</h1>
                {
                    this.state.updates.length === 0 ? <h2>LOADING Updates..</h2> :
                        this.state.updates.map(update =>

                            <Link to={`/diary/blogs/${update.blog.id}/posts/${update.id}`}>{update.title}</Link>

                        )}
            </div>
        )
    }
}
