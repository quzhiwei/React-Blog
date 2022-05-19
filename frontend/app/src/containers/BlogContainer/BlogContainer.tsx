import React, { Component } from "react";
import NewBlog from "../../components/Blog/NewBlog/NewBlog";
import Section from "../../components/Section/Section";
import { BlogCollection } from "../../models/model";

export default class BlogContainer extends Component {
  state = {};
  render() {
    const BlogCollection: BlogCollection[] = [
      {
        key: "Daily",
        value: [
          {
            user: "Jas",
            content: "hello my name is Jas ",
          },
          {
            user: "Kin",
            content: "hello my name is Kin ",
          },
        ],
      },
      {
        key: "Gaming",
        value: [
          {
            user: "Azz",
            content: "Playing league",
          },
          {
            user: "ZDXC",
            content: "Playing 4399",
          },
        ],
      },
      {
        key: "Music",
        value: [
          {
            user: "Azz",
            content: "I like rock ",
          },
          {
            user: "ZDXC",
            content: "I like jazz",
          },
        ],
      },
      {
        key: "Others",
        value: [
          {
            user: "Azz",
            content: "Random msg1",
          },
          {
            user: "ZDXC",
            content: "Random mag2",
          },
        ],
      },
    ];
    return (
      <div>
        <NewBlog />
        {BlogCollection.map((collection: BlogCollection, index: number) => {
          return <Section sectionData={collection} key={index} />;
        })}
      </div>
    );
  }
}
