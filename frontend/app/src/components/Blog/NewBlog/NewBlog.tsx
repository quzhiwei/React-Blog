import React, { Component } from "react";
import { Input, Button, Avatar, Dropdown, Menu, Space } from "antd";
import {
  PlusCircleFilled,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

export default class NewBlog extends Component {
  state = {
    blogContent: "",
    tag: 'Mood',
    items: [
      {
        label: "Daily",
        key: "1",
      },
      {
        label: "Gaming",
        key: "2",
      },
      {
        label: "Music",
        key: "3",
      },
      {
        label: "Others",
        key: "4",
      },
    ]
  };
  onChange = (e: any) => {
    console.log("Change:", e.target.value);
    this.setState({ blogContent: e.target.value });
  };

  submit = () => {
    console.log(this.state.blogContent);
    this.setState({ blogContent: "" });
  };
  updateTag = (e:any)=>{
    console.log(this.state.items[e.key].label);
    this.setState({tag:this.state.items[e.keys].label})
  }
  render() {
    const { blogContent, tag ,items} = this.state;
    const menu = (
      <Menu
      onClick={this.updateTag}
      items={items}
      />
    );
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
          <div id="options"  >
            <Dropdown
              overlay={menu}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {tag}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <PlusCircleFilled />
          </div>
          <div id="submit">
            <Button style={{ margin: "auto" }} onClick={this.submit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
