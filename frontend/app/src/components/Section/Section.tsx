import React, { Component } from "react";
import { BlogData } from "../../models/model";
import Blog from "../Blog/Blog/Blog";
import style from "./index.module.scss";
import { Button } from "antd";
export default class Section extends Component<any> {
  state = {
    blogPerSection: 3,
  };
  render() {
    const { blogPerSection } = this.state;

    const sectionName = this.props.sectionData.key;
    const blogContent = this.props.sectionData.value;
    const {
      sectionHeader,
      section,
      sectionHeaderInfo,
      sectionNameStyle,
      moreContent,
    } = style;
    return (
      <div className={section}>
        <div className={sectionHeader}>
          <div className={sectionHeaderInfo}>
            <div className={sectionNameStyle}>
              <h2>{sectionName}</h2>
            </div>
            <div className={moreContent}>
              {blogContent.length > blogPerSection && (
                <Button size="small">More Content</Button>
              )}
            </div>
          </div>

          <hr />
        </div>
        {blogContent.map((blog: BlogData, index: number) => {
          if (index <= blogPerSection) {
            return <Blog blog={blog} key={index} />;
          }
        })}
      </div>
    );
  }
}
