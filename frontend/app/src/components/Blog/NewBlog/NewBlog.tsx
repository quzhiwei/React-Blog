import React, { Component } from "react";
import { Input, Button, Avatar, Dropdown, Menu, Space } from "antd";
import {
  PlusCircleFilled,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import style from "./index.module.scss";
import { BlogData } from "../../../models/model";
import Blog from "../Blog/Blog";
export default class NewBlog extends Component<any>{
  state = {
    blogContent: "",
    blogUser: "",
    blogSection: "Mood",
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
  updateContent = (e: any) => {
    this.setState({ blogContent: e.target.value });
  };
  updateName = (e: any) => {
    this.setState({ blogUser: e.target.value });
  };
  submit = () => {
    const newBlog: BlogData = {
      user: this.state.blogUser||'Anonymous',
      content: this.state.blogContent,
    };
    console.log(newBlog);
    //post request: new blog with section 
    // await and call updateBlogCollection
    this.props.updateBlogCollection();
    this.setState({ blogContent: "", blogUser: "" });
  };
  updateSection = (e: any) => {
    this.setState({ blogSection: this.state.items[Number(e.key) - 1].label });
  };
  render() {
    const { blogContent, blogSection, items, blogUser } = this.state;
    const {
      app,
      blogOptions,
      options,
      submit,
      tagDropdown,
      upload,
      blogTextBox,
      userAvatar,
      user,
    } = style;
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
            onChange={this.updateContent}
            size={"small"}
          />
          <br />
        </div>
        <div className={blogOptions}>
          <div className={options}>
            <div className={user}>
              <Input
                size="small"
                placeholder="Anonymous"
                value={blogUser}
                onChange={this.updateName}
                maxLength={12}
              />
            </div>
            <div className={tagDropdown}>
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>{blogSection}</a>
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
