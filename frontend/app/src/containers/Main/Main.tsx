import React, { Component } from 'react'
import BlogContainer from '../BlogContainer/BlogContainer'
import {Layout, Menu, Breadcrumb} from 'antd'
import Toolbar from '../../components/Toolbar/Toolbar';
export default class Main extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div>
        <Layout>
          <Header>header</Header>
          <Layout>
            <Sider theme='light'><Toolbar /></Sider>
            <Content><BlogContainer /></Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>

      </div>
    )
  }
}
