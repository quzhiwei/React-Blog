import React, { Component } from "react";
import Blog from "../../components/Blog/Blog/Blog";
import NewBlog from "../../components/Blog/NewBlog/NewBlog";

import { BlogData } from "../../models/model";

export default class BlogContainer extends Component {
  state = {};
  render() {
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
        <NewBlog />
        {sampleData.map((blog:BlogData, index) => {
           return <Blog key={index} blog={blog}/>
        })}
      </div>
    );
  }
}
