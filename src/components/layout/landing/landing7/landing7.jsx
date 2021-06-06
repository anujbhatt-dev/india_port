import React, { Component } from "react";
import b1 from "../../../../assets/images/b1.svg";

class Landing7 extends Component {
  render() {
    return (
      <div className="landing7">
        <div className="landing7__heading">
          DIARY
          <br />
          <h6>Daily dose of Export-Import A Click Away</h6>
          <br />
          Join Indiaport to get daily updates of the latest, important changes
          and development in the export-import world in clear English. Just
          under 5 minutes read.
        </div>

        <div className="marquee">
          <div className="landing7__items">
            {this.props.blogs.map((blog) => (
              <a href={`/diary/blogs/${blog.blog.id}/posts/${blog.id}`}>
                <div className="landing7__items_card">
                  <img src={blog.labels[0]} alt="" />
                  <div className="landing7__items_card-title">
                    <div>{blog.title}</div>
                    <div className="landing7__items_card-title--date">
                      {blog.published.split("T")[0]}
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {this.props.blogs.map((blog) => (
              <a href={`/diary/blogs/${blog.blog.id}/posts/${blog.id}`}>
                <div className="landing7__items_card">
                  <img src={blog.labels[0]} alt="" />
                  <div className="landing7__items_card-title">
                    <div>{blog.title}</div>
                    <div className="landing7__items_card-title--date">
                      {blog.published.split("T")[0]}
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {this.props.blogs.map((blog) => (
              <a href={`/diary/blogs/${blog.blog.id}/posts/${blog.id}`}>
                <div className="landing7__items_card">
                  <img src={blog.labels[0]} alt="" />
                  <div className="landing7__items_card-title">
                    <div>{blog.title}</div>
                    <div className="landing7__items_card-title--date">
                      {blog.published.split("T")[0]}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a href="/diary" className="landing7__btn">
          <span>more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="38"
            viewBox="0 0 18 38"
          >
            <path
              id="Polygon_7"
              data-name="Polygon 7"
              d="M16.937,1.955a3,3,0,0,1,4.126,0L32.534,12.822A3,3,0,0,1,30.471,18H7.529a3,3,0,0,1-2.063-5.178Z"
              transform="translate(18) rotate(90)"
              fill="#0239ff"
            />
          </svg>
        </a>
      </div>
    );
  }
}

export default Landing7;
