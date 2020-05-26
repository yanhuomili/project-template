import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

import './App.css'
import Layout from '@/views/layout'
moment.locale('zh-cn')
class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router>
          <Route path="/layout" component={Layout}></Route>
          <Redirect path="/" to="/layout"></Redirect>
        </Router>
      </ConfigProvider>
    )
  }
}

export default App
