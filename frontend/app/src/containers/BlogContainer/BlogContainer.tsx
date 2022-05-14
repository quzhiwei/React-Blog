import React, { Component } from "react";
import NewBlog from "../../components/Blog/NewBlog/NewBlog";
import Section from "../../components/Section/Section";

export default class BlogContainer extends Component {
  state = {};
  render() {
    return (
      
      <div>
        <NewBlog />
        <Section sectionName={'Test'}/>
      </div>
    );
  }
}
