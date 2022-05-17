import React, { Component } from "react";
import { BlogData } from "../../models/model";
import Blog from "../Blog/Blog/Blog";
import style from './index.module.scss'
export default class Section extends Component<any> {
  render() {
    const {key,value} = this.props.sectionData;
    const {sectionHeader,section} = style;
    return (
      <div className={section}>
        <div className={sectionHeader}>
        <h2>{key}11</h2>
        <hr />
        </div>
        {value.map((blog: BlogData,index:number) => {
          return <Blog blog={blog} key={index}/>;
        })}
      </div>
    );
  }
}
