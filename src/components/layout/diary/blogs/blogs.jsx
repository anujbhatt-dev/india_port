import React, { Component } from 'react'
import diary4 from "../../../../assets/images/diary4.png"
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
                this.setState({ blogs: [...res.data.items, ...res.data.items, ...res.data.items, ...res.data.items] })
            )
            .catch(err => alert("something went wrong-> Blogs.jsx"));
        else
          this.setState({blogs:this.props.blogs});
    }

    componentDidUpdate=()=>{
        this.count=0;
    }


    count=0;

    render() {


        console.log(this.state.blogs)
        return (
            <div className="diary__3">


                {
                    this.state.blogs.length === 0 ? <h2>LOADING BLOGS..</h2> :
                        this.state.blogs.map(blog =>
                            {   if(this.count===7)
                                  this.count=0;
                                ++this.count;
                                console.log(this.count);
                                return <Link className={this.count===4?"diary__3_a diary__3_a--4":this.count===7?"diary__3_a diary__3_a--7":"diary__3_a" } to={`/diary/blogs/${blog.blog.id}/posts/${blog.id}`}><img src={blog.labels[0]} alt=""/><div className="diary__3_a-title">{blog.title}</div><div className="diary__3_a-date">13 feb 2021</div></Link>;
                             }
                          )
                        
                        }
            </div>
        )
    }
}
