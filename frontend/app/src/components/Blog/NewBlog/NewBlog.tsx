import React, { Component } from "react";
import { Input, Button, Avatar} from "antd";
import { PlusCircleFilled ,UserOutlined } from "@ant-design/icons";

export default class NewBlog extends Component {
  state = {
    blogContent: "",
  };
  onChange = (e: any) => {
    console.log("Change:", e.target.value);
    this.setState({ blogContent:e.target.value });
  };
  
  submit = ()=>{
    console.log(this.state.blogContent)
    this.setState({ blogContent:'' });
  }
  render() {
    const { blogContent } = this.state;

    const { TextArea } = Input;
    return (
      <div>
        <div>
          <Avatar size="large" icon={<UserOutlined />} />
          <TextArea
            value={blogContent}
            showCount={true}
            maxLength={100}
            style={{ width: 500, margin: "auto" }}
            placeholder="Say something..."
            autoSize={{ minRows: 2, maxRows: 6 }}
            onChange={this.onChange}
            size={"small"}
          />
          <br />
        </div>
        <div id="newBlogUtil">
          <div id="options">
            <PlusCircleFilled />
          </div>
          <div id="submit">
            <Button style={{ margin: "auto" }} onClick={this.submit} >Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}
