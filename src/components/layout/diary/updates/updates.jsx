import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import diary1 from "../../../../assets/images/diary1.png";
import diary2 from "../../../../assets/images/diary2.png";

import BlogsBootstrap from "../blogs-bootstrap";

export default class Updates extends Component {
  GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
  UDATES_BLOG_ID = `2657090034952578845`;
  UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`;
  BLOGS_BLOG_ID = `188050538809435730`;
  BLOGS_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.BLOGS_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`;

  state = {
    updates: [],
    blog: null,
  };

  componentDidMount = () => {
    if (this.props.updates.length === 0)
      axios
        .get(this.UDATES_BLOGGER_POSTS_API)
        .then((res) => this.setState({ updates: res.data.items }))
        .catch((err) => alert("something went wrong-> UPdate.jsx"));
    else this.setState({ updates: this.props.updates });

    if (this.props.blogs.length === 0)
      axios
        .get(this.BLOGS_BLOGGER_POSTS_API)
        .then((res) =>
          // console.log(res.data)
          this.setState({ blog: res.data.items[0] }),
        )
        .catch((err) => alert("something went wrong-> updates.jsx"));
    else this.setState({ blog: this.props.blogs[0] });
  };

  render() {
    return (
      <div className="diary__1">
        {this.state.blog ? (
          <Link to={`/${this.state.blog.blog.id}_${this.state.blog.id}`}>
            <div className="diary__1_1">
              <img src={this.state.blog.labels[0]} alt="" />
              <div className="diary__1_1-text">
                <div className="diary__1_1-text-title">
                  {this.state.blog.title}
                </div>
                <div className="diary__1_1-text-date">12 nov 2222</div>
              </div>
            </div>
          </Link>
        ) : null}
        <div className="diary__1_updates">
          <div className="diary__1_updates-head">Updates</div>
          {this.state.updates.length === 0
            ? [
                <Link to="/">
                  {" "}
                  <span>1.</span> loading updates...
                </Link>,
                <Link to="/">
                  {" "}
                  <span>2.</span> loading updates...
                </Link>,
                <Link to="/">
                  {" "}
                  <span>3.</span> loading updates...
                </Link>,
                <Link to="/">
                  {" "}
                  <span>4.</span> loading updates...
                </Link>,
              ]
            : this.state.updates.map((update, i) => (
                <Link to={`/${update.blog.id}_${update.id}`}>
                  <span>{i+1}</span>
                  {update.title}
                </Link>
              ))}
        </div>
      </div>
    );
  }
}
