import React, { Component } from 'react'
import Blogs from './blogs/blogs'
import News from './news/news'
import Updates from './updates/updates'

export default class Diary extends Component {
    render() {

        return (
            <div className="diary">
             <Updates updates={this.props.updates}/>
             <News news={this.props.news}/>
             <Blogs blogs={this.props.blogs}/>

            </div>
        )
    }
}
