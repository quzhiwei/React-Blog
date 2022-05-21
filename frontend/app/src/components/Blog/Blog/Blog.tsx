import React, { ChangeEvent, Component } from "react";
import style from "./index.module.scss";
import {
  CommentOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
export default class Blog extends Component<any> {
  state = {
    canComment: false,
    comment: "",
  };

  makeComment = () => {
    this.setState({ canComment: true });
  };

  submitComment = () => {
    this.setState({ canComment: false, comment: "" });
  };

  cancelComment = () => {
    this.setState({ canComment: false });
  };

  updateComment = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ comment: e.target.value });
  };
  render() {
    const { canComment, comment } = this.state;
    const { user, content } = this.props.blog;
    const comments: string[] = this.props.blog.comments || [];
    const { blog, blogOption, pointerCursor, viewComment } = style;
    return (
      <div className={blog}>
        {user}
        <br />
        {content}
        <div className={blogOption}>
          <div className={pointerCursor}>
            <CommentOutlined
              onClick={this.makeComment}
              className={pointerCursor}
              style={{ fontSize: "24px", color: "#08c" }}
            />
          </div>
        </div>
        {canComment && (
          <div>
            <Input size="small" value={comment} onChange={this.updateComment} />
            <CloseOutlined
              onClick={this.cancelComment}
              className={pointerCursor}
              style={{ fontSize: "18px", color: "#08c" }}
            />
            <CheckOutlined
              onClick={this.submitComment}
              className={pointerCursor}
              style={{ fontSize: "18px", color: "#08c" }}
            />
          </div>
        )}
        <div className={viewComment}>
          {comments.map((comment: string, index: number) => {
            return <div key={index}>{comment}</div>;
          })}
        </div>
      </div>
    );
  }
}
