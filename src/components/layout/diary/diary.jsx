import React, { Component } from 'react'
import Blogs from './blogs/blogs'
import News from './news/news'
import Updates from './updates/updates'

export default class Diary extends Component {
    render() {

        return (
            <div>
             <Updates/>
             <News/>
             <Blogs/>

            </div>
        )
    }
}
