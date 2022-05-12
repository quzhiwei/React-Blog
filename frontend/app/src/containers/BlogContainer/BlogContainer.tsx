import React, { Component } from 'react'
import Blog from '../../components/Blog/Blog/Blog'
import NewBlog from '../../components/Blog/NewBlog/NewBlog'
export default class BlogContainer extends Component {
  render() {
    return (
      <div>
          <NewBlog />
          <Blog />
      </div>
    )
  }
}
