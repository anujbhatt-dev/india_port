import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class News extends Component {


    GOOGLE_APP_KEY = `AIzaSyApP91744TCcH17bAx-X76DbFYRs-bqllk`;
    NEWS_BLOG_ID = `1964372353073726578`;
    NEWS_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.NEWS_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        news: [],
    }

    componentDidMount = () => {

        axios.get(this.NEWS_BLOGGER_POSTS_API)
            .then(res =>
                // console.log(res.data)
                this.setState({ news: res.data.items })
            )
            .catch(err => alert("something went wrong-> News.jsx"));

    }

    render() {

        return (
            <div>
                <h1>NEWS</h1>
                {
                    this.state.news.length === 0 ? <h2>LOADING NEWS..</h2> :
                        this.state.news.map(ne =>

                            <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}>{ne.title}</Link>

                        )}
            </div>
        )
    }
}
