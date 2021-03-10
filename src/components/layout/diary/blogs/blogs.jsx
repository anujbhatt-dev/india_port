import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Blogs extends Component {

    GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    BLOGS_BLOG_ID = `188050538809435730`;
    BLOGS_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.BLOGS_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        blogs: [],
    }

    componentDidMount = () => {


        if(this.props.blogs.length===0)
        axios.get(this.BLOGS_BLOGGER_POSTS_API)
            .then(res =>
                // console.log(res.data)
                this.setState({ blogs: res.data.items })
            )
            .catch(err => alert("something went wrong-> Blogs.jsx"));
        else 
          this.setState({blogs:this.props.blogs});
    }


    render() {
        return (
            <div>
                <h1>BLOGS</h1>

                {
                    this.state.blogs.length === 0 ? <h2>LOADING BLOGS..</h2> :
                        this.state.blogs.map(blog =>

                            <Link to={`/diary/blogs/${blog.blog.id}/posts/${blog.id}`}>{blog.title}</Link>

                        )}
            </div>
        )
    }
}
