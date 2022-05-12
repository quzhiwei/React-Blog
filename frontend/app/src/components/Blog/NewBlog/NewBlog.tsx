import React, { Component } from 'react'
import { Input } from 'antd'


export default class NewBlog extends Component {
    state = {
        value:'',
    }
    onChange = (e:any) => {
        console.log('Change:', e.target.value);
      };
  render() {
    const {value} = this.state;

    const {TextArea} = Input;
    return (
      <div>

        <TextArea
        value={value}
        showCount = {true} 
        maxLength={100} 
        style={{ height: 120}}
        placeholder="Autosize height with minimum and maximum number of lines"
        // autoSize={{ minRows: 2, maxRows: 6 }}
        onChange = {this.onChange}
        size = {'large'}
        />
      </div>
    )
  }
}
