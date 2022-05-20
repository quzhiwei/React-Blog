import React, { Component } from "react";
import style from "./index.module.scss";
export default class Blog extends Component<any> {
  render() {
    const { user, content } = this.props.blog;
    const { blog } = style;
    return (
      <div className={blog}>
        {user}
        <br />
        {content}
      </div>
    );
  }
}
