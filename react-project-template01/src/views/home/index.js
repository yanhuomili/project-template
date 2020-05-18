import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'home page',
    }
  }
  render() {
    return (
      <Router>
        <div>
          <h2>{this.state.msg}</h2>
          <li>
            <Link to="/home/home1">home1</Link>
          </li>
          <li>
            <Link to="/home/home2">home2</Link>
          </li>
        </div>
      </Router>
    )
  }
}

export default Home
