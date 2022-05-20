import React, { Component } from "react";
import style from "./index.module.scss";
import { CommentOutlined } from "@ant-design/icons";
export default class Blog extends Component<any> {
  render() {
    const { user, content } = this.props.blog;
    const comments: string[] = this.props.blog.comments || [];
    const { blog, blogOption, commentButton, viewComment } = style;
    return (
      <div className={blog}>
        {user}
        <br />
        {content}
        <div className={blogOption}>
          <div className={commentButton}>
            <CommentOutlined style={{ fontSize: "24px", color: "#08c" }} />
          </div>
        </div>
        <div className={viewComment}>
          {comments.map((comment: string) => {
            return <div>{comment}</div>;
          })}
        </div>
      </div>
    );
  }
}
