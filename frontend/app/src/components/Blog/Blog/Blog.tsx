import React, { Component } from 'react'
export default class Blog extends Component<any> {
  render() {
    const {user,content} = this.props.blog
    return (
      <div>
        {user}:{content}
      </div>
    )
  }
}
