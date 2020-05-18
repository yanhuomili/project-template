import React, { Component } from 'react'
class Home1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'home1',
    }
  }
  render() {
    return <div>home1页面--{this.state.msg}</div>
  }
}

export default Home1
