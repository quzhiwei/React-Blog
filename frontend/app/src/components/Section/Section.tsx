import React, { Component } from "react";
import { BlogData } from "../../models/model";
import Blog from "../Blog/Blog/Blog";
import style from './index.module.scss'
export default class Section extends Component<any> {
  render() {
    const {sectionName} = this.props.sectionName;
    const {sectionHeader} = style;
    const sampleData: BlogData[] = [
      {
        user: "Jas",
        content: "hello my name is Jas ",
      },
      {
        user: "Kin",
        content: "hello my name is Kin ",
      },
      {
        user: "Azz",
        content: "hello my name is Azz ",
      },
      {
        user: "ZDXC",
        content: "hello my name is ZDXC ",
      },
    ];
    return (
      <div>
        <div className={sectionHeader}>
        <h2>{sectionName}11</h2>
        <hr />
        </div>
        {sampleData.map((blog: BlogData, index) => {
          return <Blog key={index} blog={blog} />;
        })}
      </div>
    );
  }
}
