import React, { Component } from 'react'
import Blog from '../../components/Blog/Blog/Blog'
import NewBlog from '../../components/Blog/NewBlog/NewBlog'

type BlogData = {
  user:string,
  content:string,
}

export default class BlogContainer extends Component {
  state={

  }
  render() {
    const sampleData:BlogData[] = [{
      user:'Jas',
      content:'hello my name is Jas '
    }]
    return (
      <div>
          <NewBlog />
          <Blog />
      </div>
    )
  }
}
