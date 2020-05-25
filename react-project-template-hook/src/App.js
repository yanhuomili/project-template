import React, { Component, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './App.css'
import Layout from '@/views/layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/layout" component={Layout}></Route>
        <Redirect path="/" to="/layout"></Redirect>
      </Router>
    )
  }
}

export default App
