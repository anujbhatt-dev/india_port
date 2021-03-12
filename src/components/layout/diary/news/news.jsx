import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import diary3 from "../../../../assets/images/diary3.png"
import diary4 from "../../../../assets/images/diary4.png"

export default class News extends Component {


    GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    NEWS_BLOG_ID = `9075147176992920351`;
    NEWS_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.NEWS_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`

    state = {
        news: [],
    }

    componentDidMount = () => {

        if(this.props.news.length===0)
        axios.get(this.NEWS_BLOGGER_POSTS_API)
            .then(res =>
                // console.log(res.data)
                this.setState({ news: res.data.items })
            )
            .catch(err => alert("something went wrong-> News.jsx"));
       else
         this.setState({news:this.props.news});
    }

    render() {

        return (
            <div className="diary__2">
                <svg className="diary__2_svg" xmlns="http://www.w3.org/2000/svg" width="97" height="149" viewBox="0 0 97 149">
                <text id="ne_ws" data-name="ne
                ws" transform="translate(0 83)" fill="#080808" font-size="77" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">NE</tspan><tspan font-size="61"><tspan x="0" y="51">WS</tspan></tspan></text>
                </svg>
                <div className="diary__2_over">
                <div className="diary__2_links">

                {
                    this.state.news.length === 0 ? <Link to='/'><img src={diary3} alt=""/><h1>loading news...</h1></Link> :
                        this.state.news.map(ne =>

                            [
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                              <Link to={`/diary/blogs/${ne.blog.id}/posts/${ne.id}`}><img src={diary3} alt=""/><span>{ne.title}</span></Link>,
                            ]

                        )}
                </div>
                </div>
            </div>
        )
    }
}
