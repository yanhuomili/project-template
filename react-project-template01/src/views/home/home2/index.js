import React, { Component } from 'react'
class Home2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'home2',
    }
  }
  render() {
    return (
      <div>
        <div>home2页面--{this.state.msg}</div>
      </div>
    )
  }
}

export default Home2
