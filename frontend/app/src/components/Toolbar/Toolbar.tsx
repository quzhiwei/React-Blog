import React, { Component } from 'react'
import style from './index.module.scss'
export default class Toolbar extends Component {
  render() {
    const {toolbar} = style
    return (
        <div className={toolbar}>
          Toolbar
        </div>
    )
  }
}
