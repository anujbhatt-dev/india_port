import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Updates extends Component {

    GOOGLE_APP_KEY = `AIzaSyApP91744TCcH17bAx-X76DbFYRs-bqllk`;
    UDATES_BLOG_ID = `753366898998375447`;
    UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        updates: [],
    }

    componentDidMount = () => {

        axios.get(this.UDATES_BLOGGER_POSTS_API)
            .then(res =>
                // console.log(res.data)
                this.setState({ updates: res.data.items })
            )
            .catch(err => alert("something went wrong-> UPdate.jsx"));

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
