import React, { Component } from "react";
import { Input, Button, Avatar, Dropdown, Menu, Space } from "antd";
import {
  PlusCircleFilled,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import style from "./index.module.scss";
import { BlogData } from "../../../models/model";
export default class NewBlog extends Component {
  state = {
    blogContent: "",
    blogSection: 'Mood',
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
    ],
  };
  onChange = (e: any) => {
    this.setState({ blogContent: e.target.value });
  };
  submit = () => {
    console.log(this.state.blogContent);
    const newBlog:BlogData = {
      user:'test user',
      content: this.state.blogContent,
    }
    //update the blogCollection list.
    this.setState({ blogContent: "" });
  };
  updateSection = (e: any) => {
    this.setState({ blogSection: this.state.items[Number(e.key)-1].label });
  };
  render() {
    const { blogContent, blogSection, items } = this.state;
    const { app ,blogOptions, options, submit, tagDropdown , upload, blogTextBox, userAvatar} = style;
    const menu = <Menu onClick={this.updateSection} items={items} />;
    const { TextArea } = Input;
    return (
      <div className={app}>
        <div className={blogTextBox}>
          <div className={userAvatar}>
          <Avatar size="large" icon={<UserOutlined />} />
          </div>
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
        <div className={blogOptions}>
          <div className={options}>
            <div className={tagDropdown}>
            <Dropdown overlay={menu} >
              <a onClick={(e) => e.preventDefault()}>
                  {blogSection}
              </a>
            </Dropdown>
            </div>
            <div className={upload}>
              <PlusCircleFilled />
            </div>
          </div>
          <div className={submit}>
            <Button style={{ margin: "auto" }} onClick={this.submit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
